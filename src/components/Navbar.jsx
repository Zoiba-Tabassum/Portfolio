import { useState } from 'react'
import logo from '/logo.png'

export default function Navbar() {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* 🔹 Logo + Text – Top Left */}
      <div
        style={{
          position: 'fixed',
          top: '2rem',
          left: '3rem',
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
            width: '43px',
            height: '43px',
            objectFit: 'contain',
            filter: 'brightness(1.5) '
          }}
        />

        <h2
          style={{
            margin: 0,
            color: 'white',
            fontWeight: '450',
            letterSpacing: '0.01rem',
            fontSize: '1.25rem',
            textShadow: '0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(255,255,255,0.6)'
          }}>
          Builder
        </h2>
      </div>

      {/* 🔹 Navigation Links – Unchanged Position */}
      <nav
        style={{
          position: 'fixed',
          top: '1.15rem',
          left: '70%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          backdropFilter: 'blur(12px)',
          background: 'transparent',
          borderRadius: '999px',
          padding: '0.75rem 1.8rem',
          display: 'flex',
          gap: '2rem',
          color: 'white',
          fontWeight: '500',
          fontSize: '1.05rem',
          letterSpacing: '0.04rem'
        }}>
        {['About', 'Education', 'Projects', 'Accomplishments', 'Contact'].map((item) => {
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
    </>
  )
}
