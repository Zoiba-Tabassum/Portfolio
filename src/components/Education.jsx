import React, { useEffect, useRef, useState } from 'react'

export default function Education() {
  const itemsRef = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, entry.target.dataset.index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      year: '2023 - 2027',
      institute: 'National University of Sciences and Technology (NUST)',
      degree: 'BE Software Engineering',
      logo: '/icons/nust.png'
    },
    {
      year: '2020 - 2022',
      institute: 'MTB College, Khalid Campus',
      degree: 'Intermediate (Pre-Engineering)',
      logo: '/icons/mtb.png'
    },
    {
      year: '2018 - 2020',
      institute: 'Engro Model School, Daharki',
      degree: 'Matriculation',
      logo: '/icons/ems.png'
    }
  ]

  return (
    <section
      id="education"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        padding: '8rem 2rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('/wp9240118.jpg')",
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
        <h2
          style={{
            fontSize: '2.5rem',
            letterSpacing: '2px',
            marginBottom: '3rem',
            fontWeight: '600'
          }}>
          EDUCATION
        </h2>

        {educationData.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            data-index={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '3rem',
              opacity: visible.includes(String(index)) ? 1 : 0,
              transform: visible.includes(String(index)) ? 'translateY(0px)' : 'translateY(50px)',
              transition: 'all 0.8s ease'
            }}>
            {/* Logo */}
            <img
              src={edu.logo}
              alt="logo"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
                background: 'rgba(255,255,255,0.05)',
                padding: '10px',
                borderRadius: '14px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.05)',
                transition: 'all 0.4s ease'
              }}
            />

            <div>
              <p
                style={{
                  fontSize: '0.95rem',
                  opacity: 0.6,
                  marginBottom: '0.5rem'
                }}>
                {edu.year}
              </p>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.4rem'
                }}>
                {edu.institute}
              </h3>

              <p style={{ opacity: 0.75 }}>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
