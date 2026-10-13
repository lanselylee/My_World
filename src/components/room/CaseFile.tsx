'use client';

import { CSSProperties, Fragment, ReactNode, useRef } from 'react';
import { CaseId, contact } from '../../data/room';
import { experience, profile, projects } from '../../data/profile';
import styles from './room.module.css';
import useDialog from './useDialog';

type Props = { id: CaseId; onClose: () => void };

const typed = (text: string, delay = 0): CSSProperties =>
  ({ '--chars': text.length, '--delay': `${delay}s` }) as CSSProperties;

function Typed({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className={styles.typed} style={typed(text, delay)}>
      {text}
    </span>
  );
}

const dreams = [
  {
    title: '我梦见自己在海边奔跑',
    content:
      '夕阳西下，我赤着脚在柔软的沙滩上奔跑。海浪轻抚着我的脚踝，咸湿的海风吹散了我的头发。那一刻，我感到前所未有的自由，仿佛可以跑到天涯海角，跑到时间的尽头。',
  },
  {
    title: '我梦到一只没有眼睛的人',
    content:
      '在昏暗的街道上，我遇到了一个奇怪的人。他没有眼睛，却能准确地看到一切。他告诉我，真正的视觉不在于眼睛，而在于心灵。当我醒来时，这句话依然在我耳边回响。',
  },
  {
    title: '飞翔在星空中',
    content:
      '我张开双臂，缓缓升上夜空。星星在我身边闪烁，月亮为我照亮道路。我穿越云层，感受着宇宙的无垠与静谧。在这里，没有重力的束缚，只有无限的可能。',
  },
  {
    title: '时间倒流的城市',
    content:
      '我走在一座奇特的城市里，这里的时间是倒流的。破碎的花瓶重新拼合，凋零的花朵重新绽放，老人变回年轻的模样。我意识到，也许时间本身就是一个幻象。',
  },
];

const files: Record<CaseId, { stamp: string; title: string; terminal?: boolean; body: ReactNode }> = {
  about: {
    stamp: 'Personnel dossier',
    title: profile.name,
    body: (
      <>
        <dl className={styles.facts}>
          <dt>Study</dt>
          <dd>
            {profile.education.degree}, {profile.education.school} ({profile.education.place})
            <br />
            {profile.education.dates} · GPA {profile.education.gpa}
          </dd>
          <dt>Last role</dt>
          <dd>Software Engineering Intern, TestSprite (AI testing platform, 100K+ developers)</dd>
          <dt>Seeking</dt>
          <dd>Software engineering roles: full-stack, AI tooling, developer experience</dd>
          <dt>Before</dt>
          <dd>Two years designing original horror escape rooms in Beijing</dd>
        </dl>
        <p>{profile.summary}</p>
        <h3>Skills</h3>
        <dl className={styles.facts}>
          {profile.skills.map((s) => (
            <Fragment key={s.area}>
              <dt>{s.area}</dt>
              <dd>{s.items}</dd>
            </Fragment>
          ))}
        </dl>
        <p className={styles.meta}>Coursework: {profile.education.coursework}</p>
      </>
    ),
  },
  work: {
    stamp: 'Drawer 01',
    title: 'Work experience',
    body: (
      <>
        {experience.map((role) => (
          <section key={role.company} className={styles.entry}>
            <h3>
              {role.title} · {role.company}
            </h3>
            <p className={styles.meta}>
              {role.dates} · {role.place}
            </p>
            {role.blurb && <p>{role.blurb}</p>}
            {role.tracks.map((t) => (
              <div key={t.name} className={styles.track}>
                <h4>
                  {t.name} <span>{t.stack}</span>
                </h4>
                <ul className={styles.list}>
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </>
    ),
  },
  projects: {
    stamp: 'Terminal',
    title: 'Case files',
    terminal: true,
    body: (
      <>
        {projects.map((p, i) => {
          const head = `CASE FILE #${String(i + 1).padStart(3, '0')}  ${p.title}`;
          return (
            <section key={p.title} className={styles.entry}>
              <h3>
                <Typed text={head} delay={i * 0.6} />
              </h3>
              <p className={styles.meta}>
                STACK: {p.stack}
                {p.status && ` · ${p.status.toUpperCase()}`}
              </p>
              <ul className={styles.list}>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <p className={styles.meta}>
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      [{l.label}]
                    </a>
                  ))}
                </p>
              )}
            </section>
          );
        })}
        <section className={styles.entry}>
          <h3>
            <Typed
              text={`CASE FILE #${String(projects.length + 1).padStart(3, '0')}  Escape room web game`}
              delay={projects.length * 0.6}
            />
          </h3>
          <p className={styles.meta}>STATUS: IN DESIGN · SURVIVAL HORROR / PUZZLE · WEB GAME + VIDEO STORY</p>
          <p>
            A browser-based horror room where story, puzzles, inventory, and AI-made video scenes unfold
            together.
          </p>
          <ul className={styles.list}>
            <li>
              Prologue video: an AI-made cinematic opening introduces the house, the missing person, and
              the first contradiction in the story.
            </li>
            <li>
              Playable room: players inspect objects, collect clues, unlock drawers, and connect memories.
            </li>
            <li>
              Puzzle logic: inventory, clue board, keypad locks, hidden messages, timed audio, branching
              notes, and a final reveal.
            </li>
          </ul>
          <p className={styles.meta}>
            ROADMAP: story script &amp; character bible → room map, props &amp; clue dependency graph → AI
            video storyboard → interactive prototype → puzzle testing &amp; difficulty tuning
          </p>
        </section>
      </>
    ),
  },
  dreams: {
    stamp: 'Lamp-lit notes',
    title: 'Dreams',
    body: (
      <>
        <p>Notes kept by lamplight: the dreams I wake up remembering.</p>
        {dreams.map((d) => (
          <section key={d.title} className={styles.entry} lang="zh">
            <h3>{d.title}</h3>
            <p>{d.content}</p>
          </section>
        ))}
      </>
    ),
  },
  stories: {
    stamp: 'Manuscript',
    title: 'Stories',
    body: (
      <>
        <section className={styles.entry}>
          <h3>
            <Typed text="300k-Word Novel Published" />
          </h3>
          <p>
            I serialized and published a 300,000-word novel on a leading platform in China, my first
            long-form milestone.
          </p>
        </section>
        <section className={styles.entry}>
          <h3>
            <Typed text="Why I Write" delay={0.9} />
          </h3>
          <p>
            Words are my safe place. In writing I find a wider world, and I can say what speech
            can&apos;t carry.
          </p>
        </section>
        <section className={styles.entry}>
          <h3>
            <Typed text="My Favorite Creative Moment" delay={1.6} />
          </h3>
          <p>
            Each time I finish a complete story, it feels like I&apos;ve created a whole world: its
            characters come alive and keep breathing in my mind.
          </p>
        </section>
        <p className={styles.meta}>
          10,000+ followers · 300,000 words published · dozens of essays · endless imagination
        </p>
      </>
    ),
  },
  resume: {
    stamp: 'Sealed',
    title: 'Resume & contact',
    body: (
      <>
        <p>
          <a className={styles.primary} href={contact.resume} target="_blank" rel="noreferrer">
            Open resume (PDF)
          </a>
        </p>
        <dl className={styles.facts}>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
          <dt>GitHub</dt>
          <dd>
            <a href={contact.github} target="_blank" rel="noreferrer">
              github.com/lanselylee
            </a>
          </dd>
          <dt>LinkedIn</dt>
          <dd>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/xiaomeng-cs
            </a>
          </dd>
        </dl>
      </>
    ),
  },
  specimens: {
    stamp: 'Specimens',
    title: 'Preserved mistakes',
    body: (
      <>
        <p>
          Every wrong answer gets a jar. My LeetCode Learning System is a Python-based algorithm notebook
          with failure logs, spaced-repetition review, and GitHub Actions reminders.
        </p>
        <p className={styles.meta}>Python · Automation · GitHub Actions</p>
        <p className={styles.fullPage}>
          <a href="https://github.com/lanselylee/leetcode-learning-system" target="_blank" rel="noreferrer">
            Open on GitHub →
          </a>
        </p>
      </>
    ),
  },
};

export default function CaseFile({ id, onClose }: Props) {
  const dialogRef = useRef<HTMLElement>(null);
  const file = files[id];
  useDialog(dialogRef, onClose);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <article
        ref={dialogRef}
        className={file.terminal ? styles.terminal : styles.file}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-file-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.fileHead}>
          <span className={styles.stamp}>{file.stamp}</span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close file">
            ×
          </button>
        </div>
        <h2 id="case-file-title" className={styles.fileTitle}>
          {file.title}
        </h2>
        <div className={styles.fileBody}>{file.body}</div>
      </article>
    </div>
  );
}
