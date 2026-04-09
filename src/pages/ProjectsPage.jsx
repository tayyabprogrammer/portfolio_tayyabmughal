// src/pages/ProjectsPage.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      shortDesc: 'Next-gen online shopping experience',
      desc: 'Full-stack e-commerce solution with AI-powered product recommendations, Stripe payments, real-time inventory management, and admin dashboard with analytics.',
      image: '🛒',
      icon: '🏪',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI Recs'],
      category: 'ecommerce',
      color: '#00ffff',
      bgGradient: 'linear-gradient(135deg, #00ffff20, #0080ff10)',
      github: '#',
      live: '#',
      features: ['AI Recommendations', 'Payment Gateway', 'Admin Panel', 'Real-time Stock']
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      shortDesc: 'Intelligent conversational AI',
      desc: 'Advanced AI chatbot powered by OpenAI GPT, with context memory, file upload support, and multi-language capabilities. Perfect for customer support.',
      image: '🤖',
      icon: '🧠',
      tech: ['OpenAI API', 'Node.js', 'React', 'WebSockets'],
      category: 'ai',
      color: '#ff00ff',
      bgGradient: 'linear-gradient(135deg, #ff00ff20, #ff008010)',
      github: '#',
      live: '#',
      features: ['GPT-4 Integration', 'Context Memory', 'File Upload', 'Multi-language']
    },
    {
      id: 3,
      title: 'AI Image Generator',
      shortDesc: 'Create stunning images with AI',
      desc: 'Generate unique images from text descriptions using Stable Diffusion. Includes style presets, upscaling, and gallery management.',
      image: '🎨',
      icon: '🖼️',
      tech: ['Stable Diffusion', 'Python', 'React', 'AWS'],
      category: 'ai',
      color: '#ffff00',
      bgGradient: 'linear-gradient(135deg, #ffff0020, #ffaa0010)',
      github: '#',
      live: '#',
      features: ['Text to Image', 'Style Presets', 'HD Upscale', 'Gallery']
    },
    {
      id: 4,
      title: 'E-Commerce Analytics',
      shortDesc: 'Smart store analytics dashboard',
      desc: 'Analytics dashboard for e-commerce stores with AI-driven sales predictions, customer behavior analysis, and automated reporting.',
      image: '📊',
      icon: '📈',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
      category: 'ecommerce',
      color: '#ff4444',
      bgGradient: 'linear-gradient(135deg, #ff444420, #ff222210)',
      github: '#',
      live: '#',
      features: ['Sales Predictions', 'Customer Insights', 'Auto Reports', 'Real-time Data']
    },
    {
      id: 5,
      title: 'AI Code Assistant',
      shortDesc: 'Your AI pair programmer',
      desc: 'VS Code extension and web app that helps developers write better code, debug, and generate documentation using AI.',
      image: '💻',
      icon: '⚡',
      tech: ['Python', 'LLM', 'VS Code API', 'React'],
      category: 'ai',
      color: '#44ff88',
      bgGradient: 'linear-gradient(135deg, #44ff8820, #22cc6610)',
      github: '#',
      live: '#',
      features: ['Code Generation', 'Debug Helper', 'Doc Generator', 'Code Review']
    },
    {
      id: 6,
      title: 'E-Commerce Mobile App',
      shortDesc: 'React Native shopping app',
      desc: 'Cross-platform mobile e-commerce app with biometric login, AR product preview, and AI-powered size recommendations.',
      image: '📱',
      icon: '📲',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AI/ML'],
      category: 'ecommerce',
      color: '#4488ff',
      bgGradient: 'linear-gradient(135deg, #4488ff20, #2266dd10)',
      github: '#',
      live: '#',
      features: ['Biometric Login', 'AR Preview', 'AI Size Rec', 'Offline Mode']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: '✨' },
    { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
    { id: 'ai', label: 'AI / ML', icon: '🧠' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* Hero Section - Responsive */}
      <section style={{ padding: isMobile ? '0 20px 40px' : '0 50px 60px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: isMobile ? '40px 20px' : '60px 40px',
            background: 'rgba(6, 10, 22, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: isMobile ? '30px' : '40px',
            border: '1px solid rgba(0, 255, 255, 0.15)'
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: isMobile ? '3rem' : '4rem', marginBottom: '20px' }}
          >
            🚀
          </motion.div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00ffff, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            My Creative Works
          </h1>
          <p style={{ color: '#aaa', fontSize: isMobile ? '1rem' : '1.2rem', marginBottom: '40px' }}>
            Building the future with AI, E-Commerce, and cutting-edge technology
          </p>

          {/* Filter Buttons - Responsive */}
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '10px' : '15px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            {filters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setFilter(f.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isMobile ? '8px 20px' : '12px 32px',
                  background: filter === f.id 
                    ? 'linear-gradient(135deg, #00ffff, #0080ff)' 
                    : 'rgba(255,255,255,0.03)',
                  border: filter === f.id ? 'none' : '1px solid rgba(0,255,255,0.3)',
                  borderRadius: '50px',
                  color: filter === f.id ? '#0a0a0a' : '#00ffff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{f.icon}</span> {f.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid - Responsive Cards */}
      <section style={{ padding: isMobile ? '0 20px 60px' : '0 50px 80px', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: isMobile ? '25px' : '40px'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={!isMobile ? { y: -10 } : {}}
                onClick={() => setSelectedProject(project)}
                style={{
                  position: 'relative',
                  background: project.bgGradient,
                  backgroundBlend: 'overlay',
                  backdropFilter: 'blur(10px)',
                  borderRadius: isMobile ? '24px' : '28px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Animated Border Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, transparent, ${project.color}, ${project.color}, transparent)`,
                  opacity: 0.6
                }} />

                {/* Card Content - Responsive Padding */}
                <div style={{ padding: isMobile ? '25px' : '35px' }}>
                  {/* Icon and Category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      style={{ fontSize: isMobile ? '2.8rem' : '3.5rem' }}
                    >
                      {project.image}
                    </motion.div>
                    <span style={{
                      padding: isMobile ? '4px 12px' : '5px 15px',
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      borderRadius: '20px',
                      color: project.color,
                      fontSize: isMobile ? '0.7rem' : '0.75rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}>
                      {project.category === 'ecommerce' ? 'E-Commerce' : 'AI'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    fontSize: isMobile ? '1.5rem' : '1.8rem', 
                    color: project.color,
                    marginBottom: '10px',
                    fontWeight: 700
                  }}>
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p style={{ color: '#bbb', fontSize: isMobile ? '0.85rem' : '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                    {project.tech.slice(0, isMobile ? 2 : 3).map((tech) => (
                      <span key={tech} style={{
                        padding: isMobile ? '3px 10px' : '4px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        color: '#888',
                        fontSize: isMobile ? '0.65rem' : '0.7rem'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > (isMobile ? 2 : 3) && (
                      <span style={{ color: '#666', fontSize: isMobile ? '0.65rem' : '0.7rem' }}>
                        +{project.tech.length - (isMobile ? 2 : 3)} more
                      </span>
                    )}
                  </div>

                  {/* Stats Bar */}
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 'bold', color: project.color }}>
                        {project.features.length}
                      </div>
                      <div style={{ fontSize: isMobile ? '0.65rem' : '0.7rem', color: '#666' }}>Features</div>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 'bold', color: project.color }}>
                        2024
                      </div>
                      <div style={{ fontSize: isMobile ? '0.65rem' : '0.7rem', color: '#666' }}>Latest</div>
                    </div>
                  </div>

                  {/* Click Hint */}
                  <div style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: isMobile ? '0.65rem' : '0.7rem',
                    color: '#555',
                    letterSpacing: '1px'
                  }}>
                    Tap to explore →
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal for Project Details - Responsive */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(15px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: isMobile ? '95%' : '600px',
                width: '100%',
                maxHeight: isMobile ? '90vh' : 'auto',
                overflow: 'auto',
                background: 'rgba(10, 15, 30, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: isMobile ? '24px' : '32px',
                border: `2px solid ${selectedProject.color}`,
                overflowY: 'auto'
              }}
            >
              <div style={{ padding: isMobile ? '25px' : '40px' }}>
                <div style={{ fontSize: isMobile ? '3rem' : '4rem', textAlign: 'center', marginBottom: '20px' }}>
                  {selectedProject.icon}
                </div>
                <h2 style={{ 
                  fontSize: isMobile ? '1.5rem' : '2rem', 
                  color: selectedProject.color, 
                  textAlign: 'center', 
                  marginBottom: '15px' 
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '25px', textAlign: 'center', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {selectedProject.desc}
                </p>
                
                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: isMobile ? '0.9rem' : '1rem' }}>✨ Key Features</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                  {selectedProject.features.map((feature) => (
                    <span key={feature} style={{
                      padding: isMobile ? '5px 12px' : '6px 15px',
                      background: `${selectedProject.color}15`,
                      border: `1px solid ${selectedProject.color}40`,
                      borderRadius: '20px',
                      color: selectedProject.color,
                      fontSize: isMobile ? '0.75rem' : '0.85rem'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: isMobile ? '0.9rem' : '1rem' }}>🛠️ Tech Stack</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '35px' }}>
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} style={{
                      padding: isMobile ? '4px 10px' : '5px 12px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '10px',
                      color: '#aaa',
                      fontSize: isMobile ? '0.7rem' : '0.8rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px', flexDirection: isMobile ? 'column' : 'row' }}>
                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      flex: 1,
                      padding: isMobile ? '12px' : '14px',
                      textAlign: 'center',
                      background: 'transparent',
                      border: `2px solid ${selectedProject.color}`,
                      borderRadius: '12px',
                      color: selectedProject.color,
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.85rem' : '1rem'
                    }}
                  >
                    📂 GitHub
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      flex: 1,
                      padding: isMobile ? '12px' : '14px',
                      textAlign: 'center',
                      background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}cc)`,
                      borderRadius: '12px',
                      color: '#0a0a0a',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.85rem' : '1rem'
                    }}
                  >
                    🚀 Live Demo
                  </motion.a>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: '100%',
                    marginTop: '20px',
                    padding: isMobile ? '10px' : '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: 'none',
                    borderRadius: '10px',
                    color: '#888',
                    cursor: 'pointer',
                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - Responsive */}
      <section style={{ padding: isMobile ? '0 20px 60px' : '0 50px 100px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,255,0.05), rgba(255,0,255,0.05))',
            borderRadius: isMobile ? '30px' : '40px',
            padding: isMobile ? '40px 20px' : '60px 40px',
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid rgba(0,255,255,0.2)'
          }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '20px' }}
          >
            💡
          </motion.div>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '15px', color: '#fff' }}>
            Have a Project in Mind?
          </h2>
          <p style={{ color: '#aaa', marginBottom: '30px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
            Let's bring your ideas to life with cutting-edge technology
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,255,255,0.3)' }}
            style={{
              padding: isMobile ? '12px 35px' : '15px 45px',
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              borderRadius: '50px',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: isMobile ? '0.9rem' : '1rem',
              display: 'inline-block'
            }}
          >
            Let's Talk 🚀
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}

export default ProjectsPage