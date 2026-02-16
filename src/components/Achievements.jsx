import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Achievements() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const imageRef = useRef(null)

  const [previewImage, setPreviewImage] = useState(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  /* ---------- Responsive listener ---------- */
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = screenWidth < 600
  const isTablet = screenWidth < 992

  /* ---------- GSAP Animation ---------- */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          y: 120,
          opacity: 0,
          rotateY: 40,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      )
    })
  }, [])

  const accomplishments = [
    {
      title: '100 Days Badge - LeetCode 2025',
      image: '/accomplishments/100DayBadge.png'
    },
    {
      title: 'Wall of Hope Youth Program - Internship Completion Certificate',
      image: '/accomplishments/WOH_certificate_page-0001.jpg'
    },
    {
      title: 'WWF Technical Internship Certificate - 8 Weeks',
      image: '/accomplishments/WWF_Internship.jpeg'
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="accomplishments"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        padding: isMobile ? '5rem 1.2rem' : isTablet ? '6rem 2rem' : '8rem 4rem',
        overflow: 'hidden'
      }}>
      {/* Background Image */}
      {!isMobile && (
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '60%',
            backgroundImage: "url('/flip.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9,
            zIndex: 0
          }}
        />
      )}

      {/* LEFT FADE */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right,#000000 0%,rgba(0,0,0,0.8) 15%,rgba(0,0,0,0) 40%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* TOP FADE */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to bottom,#000000,transparent)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* BOTTOM FADE */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to top,#000000,transparent)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* TITLE */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '4rem',
          letterSpacing: '2px',
          background: 'linear-gradient(90deg,#fff,#fff)',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: '600',
          opacity: 0.9,
          position: 'relative',
          zIndex: 2
        }}>
        ACCOMPLISHMENTS
      </h2>

      {/* Cards Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          gap: isMobile ? '1.5rem' : '3rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '4rem'
        }}>
        {accomplishments.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => setPreviewImage(item.image)}
            style={{
              width: isMobile ? '200px' : '220px',
              height: isMobile ? '270px' : '300px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg,#0f0f0f,#1a1a1a)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6), inset 0 0 25px rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.4s ease'
            }}>
            {/* ⭐ STAR BADGE (UNCHANGED) */}
            <img
              src="/star.png"
              alt="star"
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                width: '32px',
                height: '32px',
                opacity: 0.9,
                rotate: '15deg',
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))'
              }}
            />

            {/* Achievement Image */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                marginBottom: '1.4rem',
                transition: 'transform 0.35s ease, filter 0.35s ease'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(8deg) scale(1.05)'
                  e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255,255,255,0.7))'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)'
                e.currentTarget.style.filter = 'none'
              }}
            />

            {/* Title */}
            <p
              style={{
                textAlign: 'center',
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                opacity: 0.85,
                padding: '0 1rem'
              }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 1000
          }}>
          <img
            src={previewImage}
            alt="preview"
            style={{
              maxWidth: '95%',
              maxHeight: '90%',
              borderRadius: '12px',
              boxShadow: '0 0 40px rgba(255,255,255,0.2)'
            }}
          />
        </div>
      )}
    </section>
  )
}
