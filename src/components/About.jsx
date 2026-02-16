import React, { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const skills = ['/icons/html.png', '/icons/css.png', '/icons/javascript.png', '/icons/react.png', '/icons/node.png', '/icons/git.png', '/icons/mysql.png']

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
        backgroundImage: "url('/wp8970955.jpg')",
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

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: '2.5rem',
            letterSpacing: '2px',
            marginBottom: '2rem',
            fontWeight: '600',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease'
          }}>
          ABOUT ME
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            opacity: visible ? 0.8 : 0,
            maxWidth: '750px',
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease',
            transitionDelay: '0.2s'
          }}>
          I’m a Software Engineering student with hands-on experience in building scalable, data-driven web applications. Through academic projects and
          internships, I’ve developed full-stack systems focused on performance, structured backend logic, and efficient data management. I prioritize clean
          architecture, problem-solving, and building reliable solutions ready for real-world impact.
        </p>

        {/* Skills */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.7rem',
            alignItems: 'center'
          }}>
          {skills.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="skill"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                opacity: visible ? 0.9 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.4s ease',
                transitionDelay: `${0.4 + index * 0.1}s`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2) rotate(-8deg)'
                e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255,255,255,0.7))'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.style.filter = 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
