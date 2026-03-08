import { useEffect, useRef } from 'react'

function ThreeBackground({ activeTab }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const colors = [
      { primary: '#3B82F6', secondary: '#EFF6FF', accent: '#2563EB' },
      { primary: '#3B82F6', secondary: '#EFF6FF', accent: '#2563EB' },
      { primary: '#3B82F6', secondary: '#EFF6FF', accent: '#2563EB' }
    ]

    const color = colors[activeTab] || colors[0]

    class Node {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 2 + 1
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update(mouse, width, height) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          const force = (150 - dist) / 150
          this.vx -= (dx / dist) * force * 0.02
          this.vy -= (dy / dist) * force * 0.02
        }

        this.vx += (this.baseX - this.x) * 0.001
        this.vy += (this.baseY - this.y) * 0.001

        this.vx *= 0.98
        this.vy *= 0.98

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }

      draw(ctx, time, color) {
        const pulse = Math.sin(time * 0.002 + this.pulseOffset) * 0.5 + 0.5
        const r = this.radius * (1 + pulse * 0.3)
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, r + 2, 0, Math.PI * 2)
        ctx.fillStyle = color.secondary
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
        ctx.fillStyle = color.primary
        ctx.globalAlpha = 0.6 + pulse * 0.4
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    class FloatingShape {
      constructor(width, height) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 40 + 20
        this.type = Math.floor(Math.random() * 3)
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
        this.floatOffset = Math.random() * Math.PI * 2
        this.floatSpeed = Math.random() * 0.001 + 0.0005
      }

      update(time) {
        this.rotation += this.rotationSpeed
        this.floatY = Math.sin(time * this.floatSpeed + this.floatOffset) * 20
      }

      draw(ctx, time, color) {
        ctx.save()
        ctx.translate(this.x, this.y + this.floatY)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = 0.08

        ctx.strokeStyle = color.primary
        ctx.lineWidth = 1

        if (this.type === 0) {
          ctx.beginPath()
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size)
          ctx.stroke()
        } else if (this.type === 1) {
          ctx.beginPath()
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.moveTo(0, -this.size / 2)
          ctx.lineTo(this.size / 2, this.size / 2)
          ctx.lineTo(-this.size / 2, this.size / 2)
          ctx.closePath()
          ctx.stroke()
        }

        ctx.restore()
      }
    }

    let nodes = []
    let shapes = []
    let width, height

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      
      nodes = []
      const nodeCount = Math.floor((width * height) / 25000)
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(Math.random() * width, Math.random() * height))
      }

      shapes = []
      for (let i = 0; i < 8; i++) {
        shapes.push(new FloatingShape(width, height))
      }
    }
    resize()

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', resize)

    const drawConnections = (ctx, nodes, color) => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = color.primary
            ctx.globalAlpha = (1 - dist / 120) * 0.15
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    const animate = () => {
      time++
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      shapes.forEach(shape => {
        shape.update(time)
        shape.draw(ctx, time, color)
      })

      nodes.forEach(node => {
        node.update(mouseRef.current, width, height)
      })

      drawConnections(ctx, nodes, color)

      nodes.forEach(node => {
        node.draw(ctx, time, color)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [activeTab])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default ThreeBackground
