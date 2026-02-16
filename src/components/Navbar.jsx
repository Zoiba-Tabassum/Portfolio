import { useState, useEffect } from 'react'
import logo from '/logo.png'

export default function Navbar() {
  const [hovered, setHovered] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // ---------- Screen Resize ----------
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  const navItems = ['About', 'Education', 'Projects', 'Accomplishments', 'Contact']

  return (
    <>
      {/* 🔹 Logo */}
      <div
        style={{
          position: 'fixed',
          top: isMobile ? '1.4rem' : isTablet ? '1.8rem' : '2rem',
          left: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '3rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          zIndex: 200,
          cursor: 'pointer'
        }}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: isMobile ? '36px' : isTablet ? '40px' : '43px',
            height: isMobile ? '36px' : isTablet ? '40px' : '43px',
            objectFit: 'contain',
            filter: 'brightness(1.5)'
          }}
        />
      </div>

      {/* 🔹 Desktop & Tablet Navigation */}
      {(isDesktop || isTablet) && (
        <nav
          style={{
            position: 'fixed',
            top: isTablet ? '1rem' : '1.15rem',
            left: '70%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            backdropFilter: 'blur(12px)',
            background: 'transparent',
            borderRadius: '999px',
            padding: isTablet ? '0.6rem 1.5rem' : '0.75rem 1.8rem',
            display: 'flex',
            gap: isTablet ? '1.5rem' : '2rem',
            color: 'white',
            fontWeight: '500',
            fontSize: isTablet ? '0.95rem' : '1.05rem',
            letterSpacing: '0.04rem'
          }}>
          {navItems.map((item) => {
            const isHovered = hovered === item

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textDecoration: 'none',
                  color: isHovered ? '#ffffff' : '#D8D2C2',
                  transition: 'all 0.3s ease',
                  textShadow: isHovered ? '0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(255,255,255,0.6)' : 'none'
                }}>
                {item}
              </a>
            )
          })}
        </nav>
      )}

      {/* 🔹 Mobile Hamburger */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 250,
            cursor: 'pointer'
          }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '26px',
                height: '2px',
                background: 'white',
                margin: '6px 0',
                transition: '0.3s'
              }}
            />
          ))}
        </div>
      )}

      {/* 🔹 Mobile Menu */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: menuOpen ? 0 : '-100%',
            width: '70%',
            height: '100vh',
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(18px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            transition: 'right 0.4s ease',
            zIndex: 240
          }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#D8D2C2',
                fontSize: '1.3rem',
                letterSpacing: '1px'
              }}>
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
