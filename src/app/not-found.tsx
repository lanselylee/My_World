export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
        background: '#141a1c',
        color: '#e8dcc0',
        fontFamily: 'var(--font-elite), "Courier New", monospace',
      }}
    >
      <h1 style={{ margin: 0, fontFamily: 'var(--font-fell), Georgia, serif', fontWeight: 400, fontSize: '3rem' }}>
        No such room
      </h1>
      <p style={{ margin: 0, color: '#b08d57' }}>This door opens onto a brick wall.</p>
      <a href="/" style={{ color: '#e8dcc0', border: '1px solid #b08d57', padding: '10px 18px', textDecoration: 'none' }}>
        Back to the study
      </a>
    </main>
  );
}
