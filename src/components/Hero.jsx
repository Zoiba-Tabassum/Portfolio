import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const imageRef = useRef(null) // ✅ define the ref
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    if (!heroRef.current || !imageRef.current) return

    gsap.fromTo(
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
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
      {/* Right-aligned background image */}
      <div
        ref={imageRef} // ✅ now correctly defined
        style={{
          position: 'absolute',
          top: 0,
          right: '-10%',
          width: '82%',
          height: '100%',
          backgroundImage: "url('/d-rendering-black-background-product-podium-stand-studio.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />

      {/* Left-side fade blend */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #0a0a0a 40%, rgba(10,10,10,0.6) 48%, rgba(10,10,10,0) 100%)',
          zIndex: 0.6
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)'
        }}
      />

      {/* Spline 3D Scene */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 5, // lower than 10
          width: '50%',
          height: '100%'
        }}>
        <Spline scene="https://prod.spline.design/JVSGQpJxX4oMLLfM/scene.splinecode" />
      </div>

      {/* Hide Spline watermark (bottom-right cover) */}
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
          width: '50%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem',

          // ✨ Animation styles
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>ZOIBA TABASSUM</h1>

        <p style={{ fontSize: '1.5rem', opacity: 0.85, color: '#D8D2C2' }}>Software Engineer | Scalable & Sustainable Tech</p>
      </div>
    </section>
  )
}
