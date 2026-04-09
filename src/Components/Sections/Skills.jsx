// src/Components/sections/Skills.jsx
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React',       level: 90, color: '#61DAFB', icon: '⚛️' },
  { name: 'JavaScript',  level: 95, color: '#F7DF1E', icon: '🟨' },
  { name: 'Node.js',     level: 85, color: '#339933', icon: '🟩' },
  { name: 'Three.js',    level: 80, color: '#00ffff', icon: '🔷' },
  { name: 'MongoDB',     level: 85, color: '#47A248', icon: '🍃' },
  { name: 'TypeScript',  level: 75, color: '#3178C6', icon: '🔵' },
]

// ─── Animated progress bar — starts when card enters viewport ────────────────
const ProgressBar = ({ level, color }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref}>
      {/* Track */}
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(255,255,255,0.07)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '8px',
      }}>
        {/* Fill */}
        <div style={{
          height: '100%',
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          borderRadius: '10px',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: `0 0 8px ${color}66`,
        }} />
      </div>
      {/* Percentage label */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          PROFICIENCY
        </span>
        <span style={{ color, fontSize: '0.85rem', fontWeight: 700 }}>
          {width}%
        </span>
      </div>
    </div>
  )
}

// ─── Single skill card ────────────────────────────────────────────────────────
const SkillCard = ({ skill, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTilt({
      x: (y - rect.height / 2) / 10,
      y: (rect.width / 2 - x) / 10,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        padding: '32px 28px',
        borderRadius: '20px',
        background: 'rgba(10, 12, 24, 0.5)',
        border: `1px solid ${hovered ? skill.color + '55' : 'rgba(255,255,255,0.06)'}`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.12s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${skill.color}18`
          : '0 8px 24px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Corner accent top-left */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '40px', height: '40px',
        borderTop: `2px solid ${skill.color}44`,
        borderLeft: `2px solid ${skill.color}44`,
        borderRadius: '20px 0 0 0',
        transition: 'border-color 0.3s ease',
        ...(hovered ? { borderTopColor: skill.color, borderLeftColor: skill.color } : {}),
      }} />

      {/* Corner accent bottom-right */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '40px', height: '40px',
        borderBottom: `2px solid ${skill.color}44`,
        borderRight: `2px solid ${skill.color}44`,
        borderRadius: '0 0 20px 0',
        transition: 'border-color 0.3s ease',
        ...(hovered ? { borderBottomColor: skill.color, borderRightColor: skill.color } : {}),
      }} />

      {/* Icon + Name row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '24px',
      }}>
        <span style={{ fontSize: '2rem', lineHeight: 1 }}>{skill.icon}</span>
        <h3 style={{
          color: skill.color,
          fontSize: '1.3rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
          margin: 0,
        }}>
          {skill.name}
        </h3>
      </div>

      {/* Animated progress bar */}
      <ProgressBar level={skill.level} color={skill.color} />
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
const Skills = () => {
  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '100px 50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      // No background — transparent like Hero, stars show through
    }}>

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '70px' }}
      >
        <p style={{
          color: '#00ffff',
          letterSpacing: '0.35em',
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '14px',
        }}>
          ✦ &nbsp; What I Work With &nbsp; ✦
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
          Skills & Technologies
        </h2>

        <p style={{
          color: '#666',
          fontSize: '1rem',
          maxWidth: '420px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Tools and technologies I use to bring ideas to life.
        </p>

        {/* Decorative line */}
        <div style={{
          width: '60px', height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          margin: '24px auto 0',
          borderRadius: '2px',
        }} />
      </motion.div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        width: '100%',
      }}>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Skills