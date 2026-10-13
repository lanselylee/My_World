'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="notice">
      <h1>The lights went out</h1>
      <p>Something went wrong while loading the study.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
