import { useEffect, useState, useRef } from 'react'

export function AnimatedCounter({ value, suffix = '', prefix = '', delay = 0 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    setCount(0)
    const timer = setTimeout(() => {
      const duration = 1500
      const start = performance.now()
      
      const animate = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.round(value * eased))
        
        if (progress < 1) requestAnimationFrame(animate)
      }
      
      requestAnimationFrame(animate)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [value, isVisible, delay])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export function TypeWriter({ text, speed = 50, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    setDisplayed('')
    
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay, isVisible])

  return <span ref={ref}>{displayed}<span className="cursor-blink">|</span></span>
}

export function AnimatedProgressBar({ value, max = 100, color = 'var(--accent-mint)', delay = 0 }) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const timeout = setTimeout(() => {
      setWidth((value / max) * 100)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, max, isVisible, delay])

  return (
    <div ref={ref} style={{ 
      width: '100%', 
      height: '8px', 
      background: 'var(--bg-light)', 
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${width}%`,
        height: '100%',
        background: color,
        borderRadius: '4px',
        transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }} />
    </div>
  )
}

export function AnimatedBarChart({ data, height = 150 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div ref={ref} style={{ 
      display: 'flex', 
      alignItems: 'flex-end', 
      gap: '8px', 
      height: `${height}px`,
      padding: '16px',
      background: 'var(--bg-white)',
      border: '1px solid var(--border-light)',
      borderRadius: '12px'
    }}>
      {data.map((item, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '100%',
            height: isVisible ? `${(item.value / maxValue) * (height - 50)}px` : '0px',
            background: item.color || 'var(--accent-mint)',
            borderRadius: '4px 4px 0 0',
            transition: `height 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`
          }} />
          <span style={{ fontSize: '10px', color: 'var(--text-gray)', textAlign: 'center' }}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function CircularProgress({ value, size = 120, strokeWidth = 8, color = 'var(--accent-mint)' }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const timeout = setTimeout(() => setProgress(value), 200)
    return () => clearTimeout(timeout)
  }, [value, isVisible])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--bg-light)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: size / 4,
        fontWeight: 700,
        color: 'var(--text-black)'
      }}>
        <AnimatedCounter value={progress} suffix="%" />
      </div>
    </div>
  )
}

export function IsometricCube({ size = 60, color = 'var(--accent-mint)', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref}
      className="isometric-cube"
      style={{
        width: size,
        height: size,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: isVisible ? 'rotateX(-30deg) rotateY(45deg)' : 'rotateX(-30deg) rotateY(45deg) scale(0)',
        transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
      }}
    >
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        opacity: 0.9,
        transform: `translateZ(${size/2}px)`,
        border: '1px solid rgba(255,255,255,0.3)'
      }} />
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        opacity: 0.7,
        transform: `rotateY(90deg) translateZ(${size/2}px)`,
        border: '1px solid rgba(255,255,255,0.3)'
      }} />
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        opacity: 0.5,
        transform: `rotateX(90deg) translateZ(${size/2}px)`,
        border: '1px solid rgba(255,255,255,0.3)'
      }} />
    </div>
  )
}

export function FlowDiagram({ steps, activeIndex = -1 }) {
  const [visibleSteps, setVisibleSteps] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, i])
            }, i * 200)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [steps])

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            padding: '10px 16px',
            background: i === activeIndex ? 'var(--accent-mint)' : 'var(--bg-white)',
            color: i === activeIndex ? 'white' : 'var(--text-gray)',
            border: `1px solid ${i === activeIndex ? 'var(--accent-mint)' : 'var(--border-light)'}`,
            borderRadius: '24px',
            fontSize: '12px',
            fontWeight: 500,
            transform: visibleSteps.includes(i) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
            opacity: visibleSteps.includes(i) ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            {step.icon && <span>{step.icon}</span>}
            <span>{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div style={{
              width: '24px',
              height: '2px',
              background: visibleSteps.includes(i + 1) ? 'var(--accent-mint)' : 'var(--border-light)',
              transition: 'background 0.4s ease',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                right: 0,
                top: '-3px',
                borderTop: '4px solid transparent',
                borderBottom: '4px solid transparent',
                borderLeft: `6px solid ${visibleSteps.includes(i + 1) ? 'var(--accent-mint)' : 'var(--border-light)'}`,
                transition: 'border-color 0.4s ease'
              }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function Timeline({ items }) {
  const [visibleItems, setVisibleItems] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * 300)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [items])

  return (
    <div ref={ref} style={{ position: 'relative', paddingLeft: '24px' }}>
      <div style={{
        position: 'absolute',
        left: '7px',
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'var(--border-light)'
      }} />
      {items.map((item, i) => (
        <div 
          key={i}
          style={{
            position: 'relative',
            paddingBottom: i < items.length - 1 ? '24px' : 0,
            opacity: visibleItems.includes(i) ? 1 : 0,
            transform: visibleItems.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div style={{
            position: 'absolute',
            left: '-24px',
            top: '2px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: item.active ? 'var(--accent-mint)' : 'var(--bg-white)',
            border: `2px solid ${item.active ? 'var(--accent-mint)' : 'var(--border-light)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {item.active && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />}
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '4px' }}>
            {item.period}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>
            {item.title}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  )
}

export function AnimatedList({ items, stagger = 100 }) {
  const [visibleItems, setVisibleItems] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * stagger)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [items, stagger])

  return (
    <div ref={ref}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            opacity: visibleItems.includes(i) ? 1 : 0,
            transform: visibleItems.includes(i) ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
