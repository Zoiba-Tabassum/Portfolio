export default function Projects() {
  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        padding: '8rem 2rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('/project-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      {/* Top Fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to bottom, #000, transparent)',
          pointerEvents: 'none'
        }}
      />

      {/* Bottom Fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to top, #000, transparent)',
          pointerEvents: 'none'
        }}
      />
    </section>
  )
}
