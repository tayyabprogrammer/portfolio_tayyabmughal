// src/Components/sections/Projects.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    desc: 'Full-featured MERN stack store with cart, payments, and admin dashboard.',
    image: '🛒',
    tech: ['React', 'Node', 'MongoDB'],
    color: '#00ffff',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Chat App',
    desc: 'Real-time messaging with rooms, online status, and Socket.io events.',
    image: '💬',
    tech: ['Socket.io', 'Express', 'MongoDB'],
    color: '#ff00ff',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: '3D Portfolio',
    desc: 'This very website — built with Three.js, React and immersive 3D backgrounds.',
    image: '🎨',
    tech: ['Three.js', 'React'],
    color: '#ffe066',
    github: '#',
    live: '#',
  },
]

// ─── Flip Card ────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => setFlipped(f => !f)}
      style={{
        width: '260px',
        height: '320px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.65s cubic-bezier(0.4,0.2,0.2,1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      {/* ── FRONT ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        background: 'linear-gradient(135deg, #1a1a2e, #0a0a0a)',
        border: `2px solid ${project.color}`,
        borderRadius: '18px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${project.color}18`,
        overflow: 'hidden',
      }}>
        {/* top glow bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }} />

        <div style={{ fontSize: '3.2rem', lineHeight: 1 }}>{project.image}</div>

        <h3 style={{
          color: project.color,
          fontSize: '1.15rem',
          fontWeight: 700,
          textAlign: 'center',
          margin: 0,
          letterSpacing: '0.02em',
        }}>
          {project.title}
        </h3>

        {/* tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px',
              background: `${project.color}18`,
              border: `1px solid ${project.color}44`,
              borderRadius: '20px',
              color: project.color,
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}>
              {t}
            </span>
          ))}
        </div>

        <p style={{
          color: '#555',
          fontSize: '0.75rem',
          margin: 0,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Tap to flip
        </p>
      </div>

      {/* ── BACK ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
        border: `2px solid ${project.color}`,
        borderRadius: '18px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${project.color}18`,
        overflow: 'hidden',
      }}>
        {/* top glow bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }} />

        <div>
          <h3 style={{ color: project.color, fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>
            {project.title}
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            {project.desc}
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={project.github}
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1,
              padding: '9px 0',
              textAlign: 'center',
              background: 'transparent',
              border: `1.5px solid ${project.color}`,
              borderRadius: '8px',
              color: project.color,
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${project.color}18`}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            GitHub
          </a>
          <a
            href={project.live}
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1,
              padding: '9px 0',
              textAlign: 'center',
              background: project.color,
              border: `1.5px solid ${project.color}`,
              borderRadius: '8px',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Live ↗
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '100px 50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      background: 'rgba(6, 10, 22, 0.72)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      borderTop: '1px solid rgba(0, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(0, 255, 255, 0.08)',
      boxShadow: 'inset 0 0 120px rgba(0, 200, 255, 0.03)',
    }}>

      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.3) 30%, rgba(180,0,255,0.3) 70%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.2) 40%, rgba(180,0,255,0.2) 60%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <p style={{
          color: '#00ffff',
          letterSpacing: '0.35em',
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '14px',
        }}>
          ✦ &nbsp; What I've Built &nbsp; ✦
        </p>

        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px',
          lineHeight: 1.1,
        }}>
          Featured Projects
        </h2>

        <p style={{
          color: '#666',
          fontSize: '1rem',
          maxWidth: '400px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          A few things I've built — tap any card to see details.
        </p>

        <div style={{
          width: '60px', height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          margin: '24px auto 0',
          borderRadius: '2px',
        }} />
      </motion.div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        gap: '28px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        perspective: '1200px',
        marginBottom: '60px',
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All Projects button → /projects */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 36px',
            background: 'transparent',
            border: '1.5px solid rgba(0,255,255,0.45)',
            borderRadius: '50px',
            color: '#00ffff',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            transition: 'background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0,255,255,0.07)'
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,255,255,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          View All Projects &nbsp; ↗
        </Link>
      </motion.div>
    </section>
  )
}

export default Projects