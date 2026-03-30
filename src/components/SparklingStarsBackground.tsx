'use client'

import { useEffect, useRef } from 'react'

interface SparklingStarsBackgroundProps {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
}

export default function SparklingStarsBackground({
  primaryColor = '#A78BFA',
  secondaryColor = '#C4B5FD',
  tertiaryColor = '#DDD6FE',
}: SparklingStarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: {
      x: number
      y: number
      size: number
      twinkleSpeed: number
      twinkleOffset: number
      color: string
    }[] = []

    const colors = [primaryColor, secondaryColor, tertiaryColor]

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5
        const alpha = 0.3 + twinkle * 0.7

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4
        )
        gradient.addColorStop(0, `${star.color}${Math.floor(alpha * 100).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${star.color}00`)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
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
