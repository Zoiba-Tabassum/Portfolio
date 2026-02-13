import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        opacity: 0.6,
        fontSize: '0.9rem',
        background: 'transparent'
      }}>
      © {new Date().getFullYear()} Zoiba Tabassum. All Rights Reserved.
    </footer>
  )
}
