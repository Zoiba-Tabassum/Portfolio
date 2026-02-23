import React, { useRef, useState, useEffect } from 'react'

export default function Projects() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  const [activeVideo, setActiveVideo] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  /* ---------------- Intersection Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (contentRef.current) observer.observe(contentRef.current)
    return () => observer.disconnect()
  }, [])

  /* ---------------- Projects Data (MP4 + Poster) ---------------- */
  const projects = [
    {
      title: 'Movie Searching Website',
      description:
        'A dynamic movie discovery platform that enables users to search films by title, director, actor, or genre while exploring detailed information such as release year, ratings, and cast. It features advanced filters for rating, genre, and year, along with a visual display of the top 5 highest-rated movies based on selected search criteria, all within a responsive and seamless user experience.',
      tech: 'Node.js • Express • HTML • CSS • JavaScript',
      github: 'https://github.com/Zoiba-Tabassum/Movie-Searching-Website.git',
      video: '/videos/MovieSearching.mp4',
      poster: '/videos/MovieSearching_preview.png'
    },
    {
      title: 'Farm Data Management System',
      description:
        'A role-based farm data collection and management system designed to streamline agricultural record-keeping and analytics. Developed as an internship project at WWF, this system allows administrators and field facilitators to manage farmers, crops, livestock, land usage, and farming activities efficiently',
      tech: 'Node.js • MySQL • Tailwind • JWT',
      github: 'https://github.com/Zoiba-Tabassum/Farm-data-manager.git',
      video: '/videos/farm_data_manager.mp4',
      poster: '/videos/farm_data_manager_preview.png'
    },
    {
      title: 'Air Quality Monitoring System',
      description:
        'A comprehensive real-time air quality monitoring application that helps users track air pollution levels, view historical data, and receive personalized alerts. The application provides interactive maps, detailed pollutant information, and health recommendations based on current air quality conditions.',
      tech: 'React • React leaflet • TailwindCSS • Axios • Nodejs • Express.js • Supabase • Node-cron • Nodemailer',
      github: 'https://github.com/Zoiba-Tabassum/Intellignet-AQI-monitoring-Airyze.git',
      video: '/videos/AiryzeAQI.mp4',
      poster: '/videos/AiryzeAQI_preview.png'
    }
  ]

  /* ---------------- Styles ---------------- */

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: '#000',
    color: 'white',
    padding: '8rem 6vw',
    overflow: 'hidden'
  }

  const galleryStyle = {
    display: 'flex',
    gap: '2rem',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    paddingBottom: '1rem'
  }

  const cardStyle = {
    minWidth: '32%',
    backdropFilter: 'blur(15px)',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '1.5rem',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    scrollSnapAlign: 'start'
  }

  /* ---------------- Responsive Media Queries ---------------- */
  const responsiveStyles = `
  .project-gallery{
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.2) transparent;
  }

  .project-gallery::-webkit-scrollbar{
    height:6px;
  }

  .project-gallery::-webkit-scrollbar-thumb{
    background:rgba(255,255,255,0.2);
    border-radius:10px;
  }

  /* Large screens */
  @media (max-width:1200px){
    .project-card{
      min-width:45% !important;
    }
  }

  /* Laptop */
  @media (max-width:1024px){
    .project-card{
      min-width:60% !important;
    }
  }

  /* Tablet */
  @media (max-width:768px){
    .projects-section{
      padding:5rem 1.5rem !important;
    }

    .project-gallery{
      gap:1.2rem !important;
    }

    .project-card{
      min-width:100% !important;   /* Full width */
      flex:0 0 100% !important;    /* Prevent shrinking */
    }

    .projects-title{
      font-size:2rem !important;
      margin-left:0 !important;
    }
  }

  /* Small Phones */
  @media (max-width:480px){
    .projects-section{
      padding:4rem 1rem !important;
    }

    .project-gallery{
 flex-direction: column !important;  /* stack vertically */
    overflow-x: hidden !important;      /* remove horizontal scroll */
    overflow-y: auto !important;
    gap:1.5rem !important;}

    .project-card{
      min-width:100% !important;
      flex:0 0 100% !important;
      padding:1.2rem !important;
    }

    .projects-title{
      font-size:1.6rem !important;
    }

    .project-card p{
      font-size:0.9rem !important;
    }
  }
`

  return (
    <>
      <style>{responsiveStyles}</style>

      <section ref={sectionRef} id="projects" className="projects-section" style={sectionStyle}>
        {/* Fade overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'linear-gradient(to bottom,#000,transparent)',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'linear-gradient(to top,#000,transparent)',
            zIndex: 1
          }}
        />
        {/* Background Image – Bottom Right */}{' '}
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
          {' '}
          {/* Left Fade */}{' '}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0) 40%)',
              pointerEvents: 'none'
            }}
          />
          {/* Top Fade */}{' '}
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
        </div>
        {/* Content */}
        <div
          ref={contentRef}
          style={{
            position: 'relative',
            zIndex: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 1s ease'
          }}>
          <h2
            className="projects-title"
            style={{
              fontSize: '2.5rem',
              marginBottom: '0.5rem',
              marginLeft: '2rem'
            }}>
            PROJECTS
          </h2>
          <h3 style={{ marginBottom: '2rem', marginLeft: '2.25rem', opacity: 0.7, fontWeight: 50, fontSize: '.75rem', fontStyle: 'italic' }}>
            Hover to see demo
          </h3>

          {/* Horizontal Gallery */}
          <div style={galleryStyle} className="project-gallery">
            {projects.map((project, index) => {
              const videoRef = React.createRef()

              return (
                <div
                  key={index}
                  className="project-card"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.2)'
                    videoRef.current?.play()
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                    videoRef.current?.pause()
                    videoRef.current.currentTime = 0
                  }}>
                  {/* Hover Video Preview */}
                  <div onClick={() => setActiveVideo(project.video)} style={{ marginBottom: '1rem', position: 'relative', cursor: 'pointer' }}>
                    <video
                      ref={videoRef}
                      src={project.video}
                      poster={project.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        width: '100%',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />{' '}
                    {/* Play Button Overlay */}
                    <img
                      src="/playbutton.png"
                      alt="Play"
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        width: '45px',
                        height: '45px',
                        opacity: 0.9,
                        pointerEvents: 'none',
                        transition: 'transform 0.3s ease, opacity 0.3s ease'
                      }}
                      className="play-button"
                    />
                  </div>

                  <h3>{project.title}</h3>

                  <p style={{ opacity: 0.6, marginTop: '0.5rem', textAlign: 'left' }}>{project.description}</p>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      opacity: 0.6,
                      marginTop: '0.8rem'
                    }}>
                    Tech: {project.tech}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.8rem',
                      color: '#D8D2C2',
                      textDecoration: 'none',
                      opacity: 1
                    }}>
                    View on GitHub →
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        {/* Fullscreen Modal */}
        {activeVideo && (
          <div
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.95)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999
            }}>
            <video
              src={activeVideo}
              controls
              autoPlay
              style={{
                maxWidth: '90%',
                maxHeight: '85%',
                borderRadius: '16px',
                boxShadow: '0 0 40px rgba(255,255,255,0.25)'
              }}
            />
          </div>
        )}
      </section>
    </>
  )
}
