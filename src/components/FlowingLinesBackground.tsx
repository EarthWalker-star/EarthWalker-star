'use client'

import { useEffect, useRef } from 'react'

interface FlowingLinesBackgroundProps {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
}

export default function FlowingLinesBackground({
  primaryColor = '#3B82F6',
  secondaryColor = '#8B5CF6',
  tertiaryColor = '#10B981',
}: FlowingLinesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: {
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      color: string
      width: number
    }[] = []

    const colors = [primaryColor, secondaryColor, tertiaryColor]

    for (let i = 0; i < 20; i++) {
      lines.push({
        y: (canvas.height / 20) * i + Math.random() * 50,
        amplitude: Math.random() * 30 + 20,
        frequency: Math.random() * 0.01 + 0.005,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 1.5 + 0.5,
      })
    }

    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      lines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(0, line.y)

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            line.y +
            Math.sin(x * line.frequency + time * line.speed + line.phase) * line.amplitude
          
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `${line.color}30`
        ctx.lineWidth = line.width
        ctx.stroke()
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
  }, [primaryColor, secondaryColor, tertiaryColor])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
