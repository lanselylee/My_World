'use client';

import { useRef } from 'react';
import { CaseId, contact, roomObjects } from '../../data/room';
import styles from './room.module.css';
import useDialog from './useDialog';

type Props = { onOpen: (id: CaseId) => void; onClose: () => void };

// Plain list of everything in the room, for visitors who just want the facts.
export default function CaseIndex({ onOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialog(dialogRef, onClose);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.index}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-index-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.fileHead}>
          <span className={styles.stamp}>Index</span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close index">
            ×
          </button>
        </div>
        <h2 id="case-index-title" className={styles.fileTitle}>
          Case Index
        </h2>
        <ol className={styles.indexList}>
          {roomObjects.map((o, i) => (
            <li key={o.id}>
              <button type="button" onClick={() => onOpen(o.id)}>
                <span className={styles.indexNo}>No. {String(i + 1).padStart(2, '0')}</span>
                <span className={styles.indexLabel}>{o.label}</span>
                <span className={styles.indexObject}>{o.object}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.indexFoot}>
          <a href={contact.resume} target="_blank" rel="noreferrer">Resume (PDF)</a>
          {' · '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {' · '}
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          {' · '}
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
