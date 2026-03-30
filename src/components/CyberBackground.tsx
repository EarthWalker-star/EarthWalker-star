'use client'

import { useEffect, useRef } from 'react'

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Hexagonal grid
    const hexagons: {
      x: number
      y: number
      size: number
      alpha: number
      pulseSpeed: number
      pulseOffset: number
    }[] = []

    const cols = Math.ceil(canvas.width / 60) + 1
    const rows = Math.ceil(canvas.height / 70) + 1

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const xOffset = j % 2 === 0 ? 0 : 30
        hexagons.push({
          x: i * 60 + xOffset,
          y: j * 70,
          size: Math.random() * 20 + 15,
          alpha: Math.random() * 0.3 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    let time = 0

    const drawHexagon = (x: number, y: number, size: number, alpha: number, color: string) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.globalAlpha = alpha
      ctx.stroke()
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      const colors = [
        { main: '#00FFFF', glow: 'rgba(0, 255, 255,' },
        { main: '#8B5CF6', glow: 'rgba(139, 92, 246,' },
        { main: '#EC4899', glow: 'rgba(236, 72, 153,' },
      ]

      hexagons.forEach((hex, index) => {
        const pulse = Math.sin(time * hex.pulseSpeed + hex.pulseOffset) * 0.3 + 0.7
        const colorIndex = index % colors.length
        const color = colors[colorIndex]

        // Draw hexagon
        drawHexagon(hex.x, hex.y, hex.size, hex.alpha * pulse, color.main)

        // Occasional fill
        if (Math.random() < 0.001) {
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const hx = hex.x + hex.size * Math.cos(angle)
            const hy = hex.y + hex.size * Math.sin(angle)
            if (i === 0) ctx.moveTo(hx, hy)
            else ctx.lineTo(hx, hy)
          }
          ctx.closePath()
          ctx.fillStyle = `${color.glow} ${hex.alpha * 0.2})`
          ctx.fill()
        }
      })

      // Connection lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.03)'
      ctx.lineWidth = 0.5
      hexagons.forEach((hex1, i) => {
        hexagons.slice(i + 1, i + 5).forEach((hex2) => {
          const dx = hex1.x - hex2.x
          const dy = hex1.y - hex2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(hex1.x, hex1.y)
            ctx.lineTo(hex2.x, hex2.y)
            ctx.stroke()
          }
        })
      })
    }

    const interval = setInterval(draw, 16)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
