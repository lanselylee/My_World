'use client';

import { CSSProperties, Fragment, ReactNode, useRef } from 'react';
import { CaseId, caseRoutes, contact } from '../../data/room';
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

function FullPage({ id }: { id: CaseId }) {
  const href = caseRoutes[id];
  const external = !href.startsWith('/');
  return (
    <p className={styles.fullPage}>
      <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {external ? 'Open on GitHub →' : 'Read the full file →'}
      </a>
    </p>
  );
}

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
          <p className={styles.meta}>STATUS: IN DESIGN</p>
          <p>
            A browser-based horror room where story, puzzles, inventory, and AI-made video scenes unfold
            together.
          </p>
          <p className={styles.meta}>
            <a href="/project">[Project page]</a>
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
        <ul className={styles.list}>
          <li>我梦见自己在海边奔跑</li>
          <li>我梦到一只没有眼睛的人</li>
          <li>飞翔在星空中</li>
          <li>时间倒流的城市</li>
        </ul>
        <FullPage id="dreams" />
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
        <p className={styles.meta}>10,000+ followers · 300,000 words published · dozens of essays</p>
        <FullPage id="stories" />
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
        <FullPage id="specimens" />
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
