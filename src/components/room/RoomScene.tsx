'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CaseId,
  contact,
  lampShade,
  portraitEyes,
  roomObjects,
  terminalScreen,
} from '../../data/room';
import CaseFile from './CaseFile';
import CaseIndex from './CaseIndex';
import styles from './room.module.css';

const HINT_KEY = 'room-hint-seen';
const PUPIL_R = 5.5;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCaseId = (v: string | null): v is CaseId =>
  !!v && roomObjects.some((o) => o.id === v);

export default function RoomScene() {
  const router = useRouter();
  const params = useSearchParams();
  const fileParam = params.get('file');
  const openId = isCaseId(fileParam) ? fileParam : null;

  const stageRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const objectRefs = useRef<Partial<Record<CaseId, HTMLButtonElement | null>>>({});
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([]);
  const eyesRef = useRef<SVGSVGElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const frame = useRef(0);
  const pushedRef = useRef(false);

  const [touch, setTouch] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [hot, setHot] = useState<CaseId | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [edges, setEdges] = useState({ left: false, right: false });

  // Touch devices get a lit, horizontally scrollable room instead of the flashlight.
  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!touch || !scrollerRef.current) return;
    const el = scrollerRef.current;
    const update = () =>
      setEdges({
        left: el.scrollLeft > 24,
        right: el.scrollLeft < el.scrollWidth - el.clientWidth - 24,
      });
    // Start centred on the portrait and desk.
    el.scrollLeft = (el.scrollWidth - el.clientWidth) * 0.38;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [touch]);

  const pan = (dir: -1 | 1) =>
    scrollerRef.current?.scrollBy({
      left: dir * window.innerWidth * 0.6,
      behavior: reducedMotion() ? 'auto' : 'smooth',
    });

  useEffect(() => {
    try {
      if (!localStorage.getItem(HINT_KEY)) setShowHint(true);
    } catch {
      setShowHint(true);
    }
  }, []);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    try {
      localStorage.setItem(HINT_KEY, '1');
    } catch {
      /* storage blocked: the hint just shows again next time */
    }
  }, []);

  // Turn the portrait's pupils towards a point in viewport coordinates.
  const lookAt = useCallback((x: number, y: number) => {
    const portrait = objectRefs.current.about;
    if (!portrait) return;
    const r = portrait.getBoundingClientRect();
    const sx = r.width / 766;
    const sy = r.height / 1000;
    portraitEyes.forEach((eye, i) => {
      const pupil = pupilRefs.current[i];
      if (!pupil) return;
      const ex = r.left + eye.cx * sx;
      const ey = r.top + eye.cy * sy;
      const ang = Math.atan2(y - ey, x - ex);
      const pull = Math.min(Math.hypot(x - ex, y - ey) / 220, 1);
      const mx = eye.rx - PUPIL_R - 1;
      const my = eye.ry - PUPIL_R * 0.55;
      pupil.style.transform = `translate(${Math.cos(ang) * mx * pull}px, ${Math.sin(ang) * my * pull}px)`;
    });
  }, []);

  // Flashlight, proximity shimmer and portrait eyes, all outside React renders.
  const paint = useCallback(() => {
    frame.current = 0;
    const stage = stageRef.current;
    const p = pointer.current;
    if (!stage || !p) return;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty('--fx', `${p.x - rect.left}px`);
    stage.style.setProperty('--fy', `${p.y - rect.top}px`);

    const reach = Math.min(rect.width * 0.11, 260);
    for (const o of roomObjects) {
      const el = objectRefs.current[o.id];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const dx = Math.max(r.left - p.x, 0, p.x - r.right);
      const dy = Math.max(r.top - p.y, 0, p.y - r.bottom);
      el.toggleAttribute('data-near', Math.hypot(dx, dy) < reach);
    }

    lookAt(p.x, p.y);
  }, [lookAt]);

  const aimAt = useCallback(
    (x: number, y: number) => {
      pointer.current = { x, y };
      if (!frame.current) frame.current = requestAnimationFrame(paint);
    },
    [paint],
  );

  useEffect(() => {
    if (touch) return;
    const onMove = (e: PointerEvent) => aimAt(e.clientX, e.clientY);
    const onResize = () => pointer.current && aimAt(pointer.current.x, pointer.current.y);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame.current);
    };
  }, [touch, aimAt]);

  // Without a pointer to follow, the eyes glance around the room on their own.
  useEffect(() => {
    if (!touch || reducedMotion()) return;
    let timer = 0;
    const glance = () => {
      const targets = roomObjects.filter((o) => o.id !== 'about');
      const el = objectRefs.current[targets[Math.floor(Math.random() * targets.length)].id];
      if (el && Math.random() > 0.25) {
        const r = el.getBoundingClientRect();
        lookAt(r.left + r.width / 2, r.top + r.height / 2);
      } else {
        lookAt(window.innerWidth / 2, window.innerHeight * 0.9); // back at the visitor
      }
      timer = window.setTimeout(glance, 2200 + Math.random() * 2800);
    };
    timer = window.setTimeout(glance, 1500);
    return () => window.clearTimeout(timer);
  }, [touch, lookAt]);

  useEffect(() => {
    if (reducedMotion()) return;
    let timer = 0;
    const blink = () => {
      const svg = eyesRef.current;
      if (svg) {
        svg.removeAttribute('data-blink');
        void svg.getBoundingClientRect(); // restart the animation
        svg.setAttribute('data-blink', '');
      }
      timer = window.setTimeout(blink, 3500 + Math.random() * 4500);
    };
    timer = window.setTimeout(blink, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  // Keyboard focus moves the light to the focused object.
  const onFocusObject = (id: CaseId) => {
    setHot(id);
    const el = objectRefs.current[id];
    if (!el || touch) return;
    const r = el.getBoundingClientRect();
    aimAt(r.left + r.width / 2, r.top + r.height / 2);
  };

  const openCase = (id: CaseId) => {
    dismissHint();
    setIndexOpen(false);
    pushedRef.current = true;
    router.push(`/?file=${id}`, { scroll: false });
  };

  const closeCase = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      router.back();
    } else {
      router.replace('/', { scroll: false });
    }
  }, [router]);

  const lampOn = hot === 'dreams' || openId === 'dreams';
  const screenOn = hot === 'projects' || openId === 'projects';
  const dark = !touch && !lightsOn;

  return (
    <div className={styles.room} data-dark={dark || undefined}>
      <h1 className={styles.srOnly}>Xiaomeng Li, software engineer: portfolio</h1>

      <header className={styles.nameplate}>
        <span className={styles.name}>Xiaomeng Li</span>
        <span className={styles.role}>Software engineer · full-stack &amp; AI tooling</span>
      </header>

      <nav className={styles.chrome} aria-label="Quick access">
        <button type="button" className={styles.chromeBtn} onClick={() => setIndexOpen(true)}>
          Case Index
        </button>
        <a className={styles.chromeBtn} href={contact.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        {!touch && (
          <button
            type="button"
            className={styles.chromeBtn}
            aria-pressed={lightsOn}
            onClick={() => setLightsOn((v) => !v)}
          >
            {lightsOn ? 'Lights off' : 'Lights on'}
          </button>
        )}
      </nav>

      <div ref={scrollerRef} className={styles.scroller} data-touch={touch || undefined}>
        <div ref={stageRef} className={styles.stage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.base} src="/room/room-base.webp" alt="" draggable={false} />

          {roomObjects.map((o) => {
            const active = openId === o.id;
            const box = active && o.activeBox ? o.activeBox : o.box;
            return (
              <button
                key={o.id}
                ref={(el) => {
                  objectRefs.current[o.id] = el;
                }}
                type="button"
                className={styles.object}
                data-id={o.id}
                data-active={active || undefined}
                style={{
                  left: `${box.left}%`,
                  top: `${box.top}%`,
                  width: `${box.width}%`,
                  height: `${box.height}%`,
                  zIndex: o.z,
                }}
                aria-label={`${o.object}: open ${o.label}`}
                onClick={() => openCase(o.id)}
                onPointerEnter={() => setHot(o.id)}
                onPointerLeave={() => setHot((h) => (h === o.id ? null : h))}
                onFocus={() => onFocusObject(o.id)}
                onBlur={() => setHot((h) => (h === o.id ? null : h))}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active && o.activeSrc ? o.activeSrc : o.src} alt="" draggable={false} />
                {o.id === 'about' && (
                  <svg
                    ref={eyesRef}
                    className={styles.eyes}
                    data-drift={touch || undefined}
                    viewBox="0 0 766 1000"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#8f6b58" />
                        <stop offset="0.45" stopColor="#b08a74" />
                        <stop offset="0.72" stopColor="#a9826c" />
                        <stop offset="0.8" stopColor="#2a1d18" />
                      </linearGradient>
                      {portraitEyes.map((e, i) => (
                        <clipPath key={i} id={`eye-${i}`}>
                          <ellipse cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} />
                        </clipPath>
                      ))}
                    </defs>
                    {portraitEyes.map((e, i) => (
                      <g key={i} clipPath={`url(#eye-${i})`}>
                        <circle
                          ref={(el) => {
                            pupilRefs.current[i] = el;
                          }}
                          cx={e.cx}
                          cy={e.cy + 1}
                          r={PUPIL_R}
                          className={styles.pupil}
                        />
                        <rect
                          className={styles.lid}
                          x={e.cx - e.rx - 2}
                          y={e.cy - e.ry - 2}
                          width={e.rx * 2 + 4}
                          height={e.ry * 2 + 4}
                          fill="url(#lid)"
                        />
                      </g>
                    ))}
                  </svg>
                )}
              </button>
            );
          })}

          <div className={styles.darkness} aria-hidden="true" />

          <div
            className={styles.lampGlow}
            data-on={lampOn || undefined}
            style={{ left: `${lampShade.x}%`, top: `${lampShade.y}%` }}
            aria-hidden="true"
          />
          <div
            className={styles.screen}
            data-on={screenOn || undefined}
            style={{
              left: `${terminalScreen.left}%`,
              top: `${terminalScreen.top}%`,
              width: `${terminalScreen.width}%`,
              height: `${terminalScreen.height}%`,
            }}
            aria-hidden="true"
          >
            <span>&gt; PROJECTS_</span>
          </div>

          {roomObjects.map((o) => (
            <span
              key={o.id}
              className={styles.tag}
              data-show={hot === o.id || undefined}
              style={{
                left: `${o.box.left + o.box.width / 2}%`,
                top: `${o.box.top + o.box.height}%`,
              }}
              aria-hidden="true"
            >
              {o.label}
            </span>
          ))}
        </div>
      </div>

      {touch && edges.left && (
        <button type="button" className={styles.pan} data-side="left" onClick={() => pan(-1)} aria-label="Look left">
          ‹
        </button>
      )}
      {touch && edges.right && (
        <button type="button" className={styles.pan} data-side="right" onClick={() => pan(1)} aria-label="Look right">
          ›
        </button>
      )}

      {showHint && !openId && (
        <aside className={styles.hint} role="note">
          <p>
            {touch
              ? 'Tap anything in the study to open its file. Swipe to look around.'
              : 'Move your light around the study and click whatever catches your eye.'}{' '}
            In a hurry? Open the <strong>Case Index</strong>.
          </p>
          <button type="button" onClick={dismissHint} aria-label="Dismiss hint">
            ×
          </button>
        </aside>
      )}

      {indexOpen && (
        <CaseIndex onOpen={openCase} onClose={() => setIndexOpen(false)} />
      )}
      {openId && <CaseFile id={openId} onClose={closeCase} />}
    </div>
  );
}
