// src/pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import img from '../assets/img2.png'
import About from '../Components/Sections/About'

const AboutPage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const frameRef = useRef(null)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const handleMouseMove = (e) => {
    if (!frameRef.current || isMobile) return
    const rect = frameRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTilt({ x: -y / 20, y: x / 20 })
  }

  const certifications = [
    { name: 'AWS Certified Developer', org: 'Amazon Web Services', year: '2023', icon: '☁️', color: '#FF9900' },
    { name: 'React Expert Certification', org: 'Meta', year: '2022', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js Advanced', org: 'OpenJS Foundation', year: '2022', icon: '🟢', color: '#68A063' },
  ]

  const education = [
    {
      degree: 'BS Computer Science',
      uni: 'FAST NUCES',
      year: '2019 – 2023',
      icon: '🎓',
      detail: 'Graduated with distinction. Specialized in Software Engineering & AI.',
    }
  ]

  // Reusable glow-line component
  const GlowLine = ({ position = 'top', colorA = 'rgba(0,255,255,0.3)', colorB = 'rgba(180,0,255,0.3)' }) => (
    <div style={{
      position: 'absolute',
      [position]: 0, left: 0, right: 0,
      height: '1px',
      background: `linear-gradient(90deg, transparent 0%, ${colorA} 30%, ${colorB} 70%, transparent 100%)`,
      pointerEvents: 'none',
    }} />
  )

  // Glass section wrapper style (same as home page About / Projects)
  const glassSectionStyle = {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(6, 10, 22, 0.72)',
    backdropFilter: 'blur(22px)',
    WebkitBackdropFilter: 'blur(22px)',
    borderTop: '1px solid rgba(0, 255, 255, 0.08)',
    borderBottom: '1px solid rgba(0, 255, 255, 0.08)',
    boxShadow: 'inset 0 0 120px rgba(0, 200, 255, 0.03)',
  }

  // Section heading block
  const SectionHeading = ({ tag, title, sub }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
    >
      <p style={{
        color: '#00ffff',
        letterSpacing: '0.35em',
        fontSize: isMobile ? '0.7rem' : '0.78rem',
        textTransform: 'uppercase',
        fontWeight: 600,
        marginBottom: '14px',
      }}>
        ✦ &nbsp; {tag} &nbsp; ✦
      </p>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '14px',
        lineHeight: 1.1,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{ color: '#666', fontSize: isMobile ? '0.85rem' : '1rem', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
      <div style={{
        width: '60px', height: '2px',
        background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
        margin: '20px auto 0',
        borderRadius: '2px',
      }} />
    </motion.div>
  )

  return (
    <div style={{ minHeight: '100vh', paddingTop: isMobile ? '60px' : '80px' }}>

      {/* ══════════════════════════════════════════════
          SECTION 1 — Hero Intro (About component - already responsive)
      ══════════════════════════════════════════════ */}
      <About />
      
      {/* ══════════════════════════════════════════════
          SECTION 2 — Education (transparent, stars show) - Responsive
      ══════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '60px 20px' : '100px 50px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionHeading
            tag="Where I Studied"
            title="Education"
            sub="The foundation of my technical journey."
          />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                padding: isMobile ? '30px 25px' : '44px 48px',
                background: 'rgba(8, 12, 28, 0.60)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(0,255,255,0.15)',
                borderRadius: isMobile ? '20px' : '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(0,200,255,0.03)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '25px' : '36px',
                alignItems: isMobile ? 'center' : 'flex-start',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              {/* top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.4), rgba(180,0,255,0.3), transparent)',
              }} />

              {/* Big icon */}
              <div style={{
                width: isMobile ? '70px' : '80px',
                height: isMobile ? '70px' : '80px',
                borderRadius: '20px',
                background: 'rgba(0,255,255,0.06)',
                border: '1.5px solid rgba(0,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isMobile ? '2rem' : '2.4rem',
                flexShrink: 0,
              }}>
                {edu.icon}
              </div>

              <div>
                <h3 style={{ color: '#fff', fontSize: isMobile ? '1.3rem' : '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                  {edu.degree}
                </h3>
                <p style={{ color: '#00ffff', fontWeight: 600, marginBottom: '8px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {edu.uni}
                </p>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 14px',
                  background: 'rgba(0,255,255,0.08)',
                  border: '1px solid rgba(0,255,255,0.2)',
                  borderRadius: '20px',
                  color: '#888',
                  fontSize: isMobile ? '0.75rem' : '0.82rem',
                  marginBottom: '16px',
                }}>
                  {edu.year}
                </span>
                <p style={{ color: '#aaa', lineHeight: 1.75, fontSize: isMobile ? '0.85rem' : '0.95rem' }}>
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — Certifications (Glass bg) - Responsive
      ══════════════════════════════════════════════ */}
      <section style={{ ...glassSectionStyle, padding: isMobile ? '60px 20px' : '100px 50px' }}>
        <GlowLine position="top" />
        <GlowLine position="bottom" colorA="rgba(0,255,255,0.2)" colorB="rgba(180,0,255,0.2)" />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <SectionHeading
            tag="What I've Earned"
            title="Certifications"
            sub="Industry-recognized credentials that validate my expertise."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '20px' : '28px',
          }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={!isMobile ? { y: -6, transition: { duration: 0.2 } } : {}}
                style={{
                  padding: isMobile ? '25px 20px' : '32px 28px',
                  background: 'rgba(8, 12, 28, 0.65)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${cert.color}30`,
                  borderRadius: '20px',
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 0 30px ${cert.color}08`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Top glow line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: `linear-gradient(90deg, transparent, ${cert.color}80, transparent)`,
                }} />

                {/* Corner accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '60px', height: '60px',
                  background: `radial-gradient(circle at top right, ${cert.color}18, transparent 70%)`,
                }} />

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: isMobile ? '15px' : '18px',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  {/* Icon badge */}
                  <div style={{
                    width: isMobile ? '50px' : '56px',
                    height: isMobile ? '50px' : '56px',
                    borderRadius: '14px',
                    background: `${cert.color}18`,
                    border: `1.5px solid ${cert.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: isMobile ? '1.4rem' : '1.6rem',
                    flexShrink: 0,
                    margin: isMobile ? '0 auto' : 0,
                  }}>
                    {cert.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      color: '#fff', 
                      fontSize: isMobile ? '0.95rem' : '1.05rem', 
                      fontWeight: 700, 
                      marginBottom: '6px',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      {cert.name}
                    </h3>
                    <p style={{ 
                      color: cert.color, 
                      fontSize: isMobile ? '0.8rem' : '0.85rem', 
                      fontWeight: 600, 
                      marginBottom: '4px',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      {cert.org}
                    </p>
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}30`,
                      borderRadius: '20px',
                      color: '#888',
                      fontSize: isMobile ? '0.7rem' : '0.78rem',
                      letterSpacing: '0.05em',
                    }}>
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage