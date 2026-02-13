import React, { useRef, useState, useEffect } from 'react'

export default function Projects() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [isVisible, setIsVisible] = useState(false) // track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // trigger once
        }
      },
      {
        threshold: 0.2 // 20% of section visible
      }
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'Movie Searching Website',
      description:
        'A dynamic movie discovery platform that enables users to search films by title, director, actor, or genre while exploring detailed information such as release year, ratings, and cast. It features advanced filters for rating, genre, and year, along with a visual display of the top 5 highest-rated movies based on selected search criteria, all within a responsive and seamless user experience.',
      tech: 'Node.js • Express.js • HTML • CSS • JavaScript',
      github: 'https://github.com/Zoiba-Tabassum/Movie-Searching-Website.git',
      video: '/public/videos/MovieSearching.mp4'
    },
    {
      title: 'Farm Data Management System',
      description:
        'A role-based farm data collection and management system designed to streamline agricultural record-keeping and analytics. Developed as an internship project at WWF, this system allows administrators and field facilitators to manage farmers, crops, livestock, land usage, and farming activities efficiently',
      tech: 'Node.js • Express.js • MySQL • Chart.js • Tailwind CSS • JWT',
      github: 'https://github.com/yourrepo',
      video: '/public/videos/farm_data_manager.mp4'
    },
    {
      title: 'Air Quality Monitoring System',
      description: 'Intelligent AQI prediction system using ML models.',
      tech: 'Express.js • Node.js • TailwindCSS • React',
      github: 'https://github.com/yourrepo',
      video: '/public/videos/AiryzeAQI.mp4'
    }
  ]

  const glassCard = {
    minWidth: '32%', // 3 cards visible
    backdropFilter: 'blur(15px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '1.5rem',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    scrollSnapAlign: 'start'
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        padding: '8rem 4rem',
        overflow: 'hidden'
      }}>
      {/* Background Image – Bottom Right */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '50%',
          height: '60%',
          backgroundImage: "url('/photo-1678366633407-7f49da199a42.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          zIndex: 0
        }}>
        {/* Left Fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0) 40%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Top Fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to bottom, #000000, transparent)',
          pointerEvents: 'none',
          zIndex: 1
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
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: isVisible ? 1 : 0, // fade in
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)', // slide up
          transition: 'opacity 1s ease-out, transform 1s ease-out'
        }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', marginLeft: '4rem', marginTop: '2rem' }}>PROJECTS</h2>

        {/* Horizontal Scroll Gallery */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            // Hide scrollbar for WebKit browsers
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none' // IE 10+
          }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={glassCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.7))'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.filter = 'none'
              }}>
              {/* Video Preview */}
              <div onClick={() => setActiveVideo(project.video)} style={{ marginBottom: '1rem' }}>
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  style={{
                    width: '100%',
                    borderRadius: '12px'
                  }}
                />
              </div>

              <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>

              <p style={{ opacity: 0.7, marginBottom: '0.8rem' }}>{project.description}</p>

              <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Tech: {project.tech}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.8rem',
                  color: '#D8D2C2',
                  textDecoration: 'none'
                }}>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999
          }}>
          <video
            src={activeVideo}
            controls
            autoPlay
            style={{
              width: '80%',
              maxWidth: '900px',
              borderRadius: '16px'
            }}
          />
        </div>
      )}
    </section>
  )
}
