// src/pages/Blogs.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📝' },
    { id: 'tech', name: 'Tech', icon: '💻' },
    { id: 'tutorial', name: 'Tutorials', icon: '🎓' },
    { id: 'career', name: 'Career', icon: '🚀' }
  ]

  const blogs = [
    {
      id: 1,
      title: 'Building 3D Websites with Three.js',
      excerpt: 'Learn how to create immersive web experiences using React Three Fiber and Three.js. Complete guide for beginners.',
      fullContent: 'Three.js is a powerful library that makes WebGL accessible... In this comprehensive guide, we will explore everything from basic setup to advanced animations and 3D model integration. You will learn how to create stunning 3D backgrounds, interactive product displays, and immersive storytelling experiences.',
      category: 'tutorial',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      image: '🎨',
      icon: '🖼️',
      color: '#00ffff',
      featured: true,
      tags: ['Three.js', '3D', 'React', 'WebGL']
    },
    {
      id: 2,
      title: 'MERN Stack Best Practices',
      excerpt: 'Essential tips and patterns for building scalable MERN applications. From database design to deployment.',
      fullContent: 'Building production-ready MERN applications requires following best practices. This article covers project structure, environment variables, error handling, authentication patterns, database indexing, and deployment strategies using Docker and CI/CD pipelines.',
      category: 'tech',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      image: '⚡',
      icon: '⚛️',
      color: '#ff00ff',
      featured: false,
      tags: ['MERN', 'React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'My Journey as a Developer',
      excerpt: 'From first line of code to professional developer. Lessons learned, mistakes made, and advice for newcomers.',
      fullContent: "Every developer has a unique journey. I started coding at 16, built my first website at 18, and landed my first job at 20. In this honest reflection, I share the struggles, breakthroughs, and lessons that shaped my career. From imposter syndrome to shipping my first production app.",
      category: 'career',
      date: 'Jan 5, 2024',
      readTime: '6 min read',
      image: '🚀',
      icon: '🌟',
      color: '#ffff00',
      featured: false,
      tags: ['Career', 'Programming', 'Motivation']
    },
    {
      id: 4,
      title: 'Understanding React Hooks',
      excerpt: 'Deep dive into useState, useEffect, and custom hooks. Practical examples and common pitfalls explained.',
      fullContent: "React Hooks revolutionized how we write components. This deep dive covers useState for state management, useEffect for side effects, useContext for global state, and how to create custom hooks. Includes real-world examples and performance optimization tips.",
      category: 'tutorial',
      date: 'Dec 28, 2023',
      readTime: '10 min read',
      image: '⚛️',
      icon: '🎣',
      color: '#61DAFB',
      featured: false,
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      id: 5,
      title: 'Web Performance Optimization',
      excerpt: 'Speed matters! Techniques to optimize your web apps for better user experience and SEO rankings.',
      fullContent: "Website speed directly impacts user engagement and SEO. Learn about lazy loading, code splitting, image optimization, caching strategies, CDN setup, Core Web Vitals, and tools like Lighthouse and WebPageTest to measure and improve performance.",
      category: 'tech',
      date: 'Dec 20, 2023',
      readTime: '7 min read',
      image: '🚀',
      icon: '⚡',
      color: '#ff4444',
      featured: false,
      tags: ['Performance', 'SEO', 'Optimization']
    },
    {
      id: 6,
      title: 'Freelancing vs Full-time',
      excerpt: 'Pros and cons of both paths based on my 3 years of experience. Which one suits you better?',
      fullContent: "Both freelancing and full-time employment have their merits. This article compares income stability, work-life balance, growth opportunities, taxes, benefits, and lifestyle. Based on real experience transitioning from full-time to freelance and back.",
      category: 'career',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      image: '💼',
      icon: '💭',
      color: '#44ff88',
      featured: false,
      tags: ['Freelancing', 'Career', 'Work-Life']
    }
  ]

  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory)

  const featuredBlog = blogs.find(b => b.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* Header with Glass Effect - Responsive */}
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
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: isMobile ? '2.8rem' : '3.5rem', marginBottom: '20px' }}
          >
            ✍️
          </motion.div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            My Blog
          </h1>
          <p style={{ color: '#aaa', fontSize: isMobile ? '0.95rem' : '1.1rem', marginBottom: '40px' }}>
            Thoughts, tutorials, and insights from my coding journey
          </p>

          {/* Categories with Icons - Responsive */}
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '10px' : '15px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isMobile ? '8px 18px' : '12px 28px',
                  background: activeCategory === cat.id 
                    ? 'linear-gradient(135deg, #00ffff, #0080ff)' 
                    : 'rgba(255,255,255,0.03)',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(0,255,255,0.3)',
                  borderRadius: '50px',
                  color: activeCategory === cat.id ? '#0a0a0a' : '#00ffff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{cat.icon}</span> {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Post - Responsive */}
      {activeCategory === 'all' && featuredBlog && (
        <section style={{ padding: isMobile ? '0 20px 40px' : '0 50px 60px', maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedBlog(featuredBlog)}
            style={{
              background: 'rgba(6, 10, 22, 0.72)',
              backdropFilter: 'blur(22px)',
              borderRadius: isMobile ? '24px' : '32px',
              border: `2px solid ${featuredBlog.color}`,
              padding: isMobile ? '30px 20px' : '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Featured Badge */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '12px' : '20px',
              right: isMobile ? '12px' : '20px',
              padding: isMobile ? '5px 12px' : '8px 20px',
              background: featuredBlog.color,
              borderRadius: '30px',
              color: '#0a0a0a',
              fontWeight: 'bold',
              fontSize: isMobile ? '0.7rem' : '0.8rem'
            }}>
              ⭐ FEATURED
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
              gap: isMobile ? '25px' : '40px',
              alignItems: 'center'
            }}>
              <div style={{
                fontSize: isMobile ? '4rem' : '6rem',
                textAlign: 'center'
              }}>
                {featuredBlog.image}
              </div>
              
              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <h2 style={{ 
                  fontSize: isMobile ? '1.5rem' : '2rem', 
                  color: featuredBlog.color,
                  marginBottom: '15px'
                }}>
                  {featuredBlog.title}
                </h2>
                
                <p style={{ color: '#ccc', lineHeight: 1.7, marginBottom: '20px', fontSize: isMobile ? '0.85rem' : '1rem' }}>
                  {featuredBlog.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  color: '#888', 
                  fontSize: isMobile ? '0.75rem' : '0.85rem', 
                  marginBottom: '20px' 
                }}>
                  <span>📅 {featuredBlog.date}</span>
                  <span>⏱️ {featuredBlog.readTime}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: isMobile ? 'center' : 'flex-start', flexWrap: 'wrap' }}>
                  {featuredBlog.tags.map(tag => (
                    <span key={tag} style={{
                      padding: isMobile ? '3px 10px' : '4px 12px',
                      background: `${featuredBlog.color}15`,
                      borderRadius: '20px',
                      color: featuredBlog.color,
                      fontSize: isMobile ? '0.65rem' : '0.7rem'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Grid - Responsive */}
      <section style={{ padding: isMobile ? '0 20px 60px' : '0 50px 80px', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: isMobile ? '25px' : '35px'
          }}
        >
          <AnimatePresence>
            {filteredBlogs.filter(b => !b.featured).map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                layout
                whileHover={!isMobile ? { y: -8 } : {}}
                onClick={() => setSelectedBlog(blog)}
                style={{
                  background: 'rgba(6, 10, 22, 0.72)',
                  backdropFilter: 'blur(22px)',
                  borderRadius: isMobile ? '20px' : '24px',
                  border: `1px solid rgba(0, 255, 255, 0.12)`,
                  padding: isMobile ? '25px' : '35px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Top Glow Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${blog.color}, transparent)`,
                  borderRadius: '2px',
                  opacity: 0.4
                }} />

                {/* Icon */}
                <div style={{
                  fontSize: isMobile ? '2.5rem' : '3rem',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{blog.image}</span>
                  <span style={{
                    padding: isMobile ? '3px 10px' : '4px 12px',
                    background: `${blog.color}20`,
                    borderRadius: '20px',
                    color: blog.color,
                    fontSize: isMobile ? '0.65rem' : '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  color: '#fff',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  color: '#aaa',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem'
                }}>
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {blog.tags.slice(0, isMobile ? 2 : 2).map(tag => (
                    <span key={tag} style={{
                      padding: isMobile ? '2px 8px' : '3px 10px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '12px',
                      color: '#777',
                      fontSize: isMobile ? '0.6rem' : '0.65rem'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{ color: '#666', fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                    📅 {blog.date}
                  </span>
                  <span style={{ 
                    color: blog.color, 
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {blog.readTime} <span>→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Blog Modal - Responsive */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(15px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px',
              overflow: 'auto'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: isMobile ? '95%' : '750px',
                width: '100%',
                maxHeight: '85vh',
                overflow: 'auto',
                background: 'rgba(6, 10, 22, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: isMobile ? '24px' : '32px',
                border: `2px solid ${selectedBlog.color}`,
                position: 'relative'
              }}
            >
              <div style={{ padding: isMobile ? '25px' : '45px' }}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBlog(null)}
                  style={{
                    position: 'absolute',
                    top: isMobile ? '15px' : '20px',
                    right: isMobile ? '15px' : '20px',
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: isMobile ? '35px' : '40px',
                    height: isMobile ? '35px' : '40px',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    cursor: 'pointer',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ✕
                </button>

                {/* Icon */}
                <div style={{ fontSize: isMobile ? '3rem' : '4rem', textAlign: 'center', marginBottom: '20px' }}>
                  {selectedBlog.icon || selectedBlog.image}
                </div>

                {/* Category Badge */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <span style={{
                    padding: isMobile ? '4px 14px' : '5px 18px',
                    background: `${selectedBlog.color}20`,
                    border: `1px solid ${selectedBlog.color}`,
                    borderRadius: '30px',
                    color: selectedBlog.color,
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {selectedBlog.category.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{ 
                  fontSize: isMobile ? '1.4rem' : '1.8rem', 
                  color: selectedBlog.color,
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  {selectedBlog.title}
                </h2>

                {/* Meta */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '20px', 
                  marginBottom: '30px',
                  color: '#666',
                  fontSize: isMobile ? '0.75rem' : '0.85rem'
                }}>
                  <span>📅 {selectedBlog.date}</span>
                  <span>⏱️ {selectedBlog.readTime}</span>
                </div>

                {/* Content */}
                <p style={{ 
                  color: '#ccc', 
                  lineHeight: 1.8, 
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  marginBottom: '30px'
                }}>
                  {selectedBlog.fullContent}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '10px',
                  marginBottom: '30px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {selectedBlog.tags.map(tag => (
                    <span key={tag} style={{
                      padding: isMobile ? '4px 10px' : '5px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '20px',
                      color: '#888',
                      fontSize: isMobile ? '0.7rem' : '0.8rem'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <div style={{ textAlign: 'center' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    style={{
                      padding: isMobile ? '10px 25px' : '12px 35px',
                      background: `linear-gradient(135deg, ${selectedBlog.color}, ${selectedBlog.color}cc)`,
                      border: 'none',
                      borderRadius: '50px',
                      color: '#0a0a0a',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: isMobile ? '0.8rem' : '0.9rem'
                    }}
                  >
                    Continue Reading →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter CTA - Responsive */}
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
            maxWidth: '700px',
            margin: '0 auto',
            border: '1px solid rgba(0,255,255,0.2)'
          }}
        >
          <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '15px' }}>📧</div>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', marginBottom: '15px', color: '#fff' }}>
            Never Miss a Post
          </h2>
          <p style={{ color: '#aaa', marginBottom: '25px', fontSize: isMobile ? '0.85rem' : '1rem' }}>
            Subscribe to get notified when I publish new articles
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            flexDirection: isMobile ? 'column' : 'row',
            maxWidth: '450px', 
            margin: '0 auto' 
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: isMobile ? '12px 16px' : '14px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(0,255,255,0.3)',
                borderRadius: '50px',
                color: '#fff',
                outline: 'none',
                fontSize: isMobile ? '0.85rem' : '1rem'
              }}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              style={{
                padding: isMobile ? '12px 20px' : '14px 28px',
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                border: 'none',
                borderRadius: '50px',
                color: '#0a0a0a',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: isMobile ? '0.85rem' : '1rem'
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Blogs