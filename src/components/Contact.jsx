import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contentRef = useRef(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  /* ---------- Screen Resize Listener ---------- */
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = screenWidth < 600
  const isTablet = screenWidth < 992

  /* ---------- GSAP Animation ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const socials = [
    {
      href: 'https://www.linkedin.com/in/zoiba-tabassum-0a1141319/',
      src: '/icons/linkedin.png',
      alt: 'LinkedIn'
    },
    {
      href: 'https://leetcode.com/u/zoiba_tabassum/',
      src: '/icons/leetcode.png',
      alt: 'LeetCode'
    },
    {
      href: 'https://github.com/Zoiba-Tabassum',
      src: '/icons/github.png',
      alt: 'GitHub'
    },
    {
      href: 'mailto:zoibatabassum@gmail.com',
      src: '/icons/gmail.png',
      alt: 'Email'
    }
  ]

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        padding: isMobile ? '5rem 1.2rem 2rem' : isTablet ? '6rem 2rem 2rem' : '8rem 2rem 2rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: "url('/cubed-squares-black-3d-bqeujlzpj3p2e505.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      {/* TOP FADE */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to bottom,#000,transparent)',
          pointerEvents: 'none'
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
          background: 'linear-gradient(to top,#000,transparent)',
          pointerEvents: 'none'
        }}
      />

      {/* CONTACT CONTENT */}
      <div
        ref={contentRef}
        style={{
          marginTop: isMobile ? '3rem' : '6rem',
          textAlign: 'center',
          zIndex: 2,
          maxWidth: '900px',
          marginInline: 'auto'
        }}>
        <h2
          style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.4rem' : '2.8rem',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}>
          LET'S CONNECT
        </h2>

        <p style={{ opacity: 0.9, marginTop: '1.2rem' }}>I’m always open to discussing new opportunities, collaborations, or creative ideas.</p>

        <p
          style={{
            opacity: 0.9,
            marginBottom: '3rem',
            marginTop: '0.5rem'
          }}>
          Feel free to reach out — I’m always excited to collaborate, learn, and create.
        </p>

        {/* SOCIAL ICONS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '1.2rem' : '2.5rem',
            marginTop: '2rem'
          }}>
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                width: isMobile ? '55px' : '70px',
                height: isMobile ? '55px' : '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.25)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '90%',
                  height: '90%',
                  objectFit: 'contain'
                }}
              />
            </a>
          ))}
        </div>

        {/* DOWNLOAD CV */}
        <div style={{ marginTop: '3rem' }}>
          <a
            href="/Zoiba_Tabassum_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: isMobile ? '0.8rem 1.8rem' : '0.9rem 2.2rem',
              fontSize: isMobile ? '0.9rem' : '1rem',
              borderRadius: '40px',
              textDecoration: 'none',
              color: 'white',
              background: 'linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.4s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
            View Resume
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </section>
  )
}
