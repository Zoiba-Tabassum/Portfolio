import React, { useEffect, useRef, useState } from 'react'

export default function Education() {
  const itemsRef = useRef([])
  const [visible, setVisible] = useState(new Set())

  /* ---------------- Intersection Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = new Set(prev)
              updated.add(entry.target.dataset.index)
              return updated
            })
            observer.unobserve(entry.target) // ✅ performance boost
          }
        })
      },
      { threshold: 0.2 }
    )

    itemsRef.current.forEach((item) => item && observer.observe(item))
    return () => observer.disconnect()
  }, [])

  /* ---------------- Data ---------------- */
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
    <section id="education" className="education-section">
      {/* Top Fade */}
      <div className="fade-top" />

      {/* Bottom Fade */}
      <div className="fade-bottom" />

      <div className="education-container">
        <h2 className="education-title">EDUCATION</h2>

        {educationData.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            data-index={index}
            className={`education-item ${visible.has(String(index)) ? 'show' : ''}`}>
            {/* Logo */}
            <img src={edu.logo} alt="logo" className="education-logo" />

            <div>
              <p className="education-year">{edu.year}</p>
              <h3 className="education-institute">{edu.institute}</h3>
              <p className="education-degree">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- Styles ---------------- */}
      <style>{`
        .education-section {
          position: relative;
          min-height: 100vh;
          background: #000;
          color: white;
          padding: 8rem 2rem;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-image: url('/wp9240118.jpg');
          background-size: cover;
          background-position: center;
        }

        .education-container {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .education-title {
          font-size: 2.5rem;
          letter-spacing: 2px;
          margin-bottom: 3rem;
          font-weight: 600;
        }

        .education-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .education-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        .education-logo {
          width: 70px;
          height: 70px;
          object-fit: contain;
          background: rgba(255,255,255,0.05);
          padding: 10px;
          border-radius: 14px;
          box-shadow:
            0 10px 25px rgba(0,0,0,0.6),
            0 0 15px rgba(255,255,255,0.05);
          flex-shrink: 0;
        }

        .education-year {
          font-size: 0.95rem;
          opacity: 0.6;
          margin-bottom: 0.5rem;
        }

        .education-institute {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .education-degree {
          opacity: 0.75;
        }

        /* Fade overlays */
        .fade-top,
        .fade-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100px;
          pointer-events: none;
        }

        .fade-top {
          top: 0;
          background: linear-gradient(to bottom, #000, transparent);
        }

        .fade-bottom {
          bottom: 0;
          background: linear-gradient(to top, #000, transparent);
        }

        /* ---------------- Tablet ---------------- */
        @media (max-width: 992px) {
          .education-section {
            padding: 6rem 1.5rem;
          }

          .education-title {
            font-size: 2.2rem;
          }
        }

        /* ---------------- Mobile ---------------- */
        @media (max-width: 600px) {
          .education-section {
            padding: 5rem 1.2rem;
          }

          .education-title {
            font-size: 1.9rem;
            text-align: center;
          }

          .education-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .education-logo {
            width: 60px;
            height: 60px;
          }

          .education-institute {
            font-size: 1.05rem;
          }

          .education-degree {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}
