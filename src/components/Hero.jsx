import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)

  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  /* ---------- Responsive detection ---------- */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* ---------- Entrance + Parallax ---------- */
  useEffect(() => {
    setVisible(true)

    if (!heroRef.current || !imageRef.current || isMobile) return

    const anim = gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    )

    return () => {
      anim?.scrollTrigger?.kill()
    }
  }, [isMobile])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
      {/* Background Image */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          top: 0,
          right: isMobile ? 0 : '-10%',
          width: isMobile ? '100%' : '82%',
          height: '100%',
          backgroundImage: "url('/d-rendering-black-background-product-podium-stand-studio.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />

      {/* Left Fade Blend */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isMobile
            ? 'linear-gradient(to bottom,#0a0a0a 20%,rgba(10,10,10,0.4) 60%,transparent)'
            : 'linear-gradient(90deg,#0a0a0a 40%,rgba(10,10,10,0.6) 48%,rgba(10,10,10,0) 100%)'
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)'
        }}
      />

      {/* Spline Scene */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: isMobile ? '55%' : 0,
          zIndex: 5,
          width: isMobile ? '100%' : '50%',
          height: isMobile ? '45%' : '100%',
          pointerEvents: 'auto'
        }}>
        {/* Disable heavy rendering shift on very small screens */}
        <Spline scene="https://prod.spline.design/JVSGQpJxX4oMLLfM/scene.splinecode" />
      </div>

      {/* Watermark Cover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '145px',
          height: '35px',
          margin: '1.3rem',
          padding: '0.45rem',
          borderRadius: '9px',
          backgroundColor: '#161717',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <span
          style={{
            color: '#4c4d4d',
            fontSize: '0.85rem',
            letterSpacing: '1px'
          }}>
          Zoiba © 2026
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 2,
          width: isMobile ? '100%' : '50%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isMobile ? 'flex-start' : 'center',
          textAlign: 'center',
          color: 'white',
          padding: isMobile ? '7rem 1.5rem 0' : '0 1rem',

          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
        <h1
          style={{
            fontSize: isMobile ? '2.1rem' : '3rem',
            fontWeight: 800,
            letterSpacing: '1px'
          }}>
          ZOIBA TABASSUM
        </h1>

        <p
          style={{
            fontSize: isMobile ? '1.1rem' : '1.5rem',
            opacity: 0.85,
            color: '#D8D2C2',
            marginTop: '0.6rem',
            lineHeight: 1.4
          }}>
          Software Engineer | Scalable & Sustainable Tech
        </p>
      </div>
    </section>
  )
}
