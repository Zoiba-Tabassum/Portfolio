import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contentRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%'
        }
      }
    )
  }, [])

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        padding: '8rem 2rem 2rem 2rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: "url('/cubed-squares-black-3d-bqeujlzpj3p2e505.jpg')",
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
          background: 'linear-gradient(to bottom, #000000, transparent)',
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
          background: 'linear-gradient(to top, #000000, transparent)',
          pointerEvents: 'none'
        }}
      />

      {/* Contact Content */}
      <div
        ref={contentRef}
        style={{
          marginTop: '6rem',
          textAlign: 'center',
          zIndex: 2,
          animation: 'fadeUp 1.2s ease forwards'
        }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>LET'S CONNECT</h2>
        <p style={{ opacity: 0.9, marginTop: '1.5rem' }}>I’m always open to discussing new opportunities, collaborations, or creative ideas.</p>{' '}
        <p style={{ opacity: 0.9, marginBottom: '3rem', marginTop: '0.5rem' }}>
          Feel free to reach out — I’m always excited to collaborate, learn, and create.
        </p>
        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            marginTop: '2rem'
          }}>
          {[
            { href: 'https://www.linkedin.com/in/zoiba-tabassum-0a1141319/', src: '/icons/linkedin.png', alt: 'LinkedIn' },
            { href: 'https://leetcode.com/u/zoiba_tabassum/', src: '/icons/leetcode.png', alt: 'LeetCode' },
            { href: 'https://github.com/Zoiba-Tabassum', src: '/icons/github.png', alt: 'GitHub' },
            { href: 'mailto:zoibatabassum@gmail.com', src: '/icons/gmail.png', alt: 'Email' }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '70px',
                  height: '70px',
                  objectFit: 'contain'
                }}
              />
            </a>
          ))}
        </div>
        {/* Download CV Button */}
        <div style={{ marginTop: '3rem' }}>
          <a
            href="/Zoiba-CV.pdf" // put your CV inside public folder
            download
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '1rem',
              borderRadius: '40px',
              textDecoration: 'none',
              color: 'white',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.4s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
            Download CV
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}
