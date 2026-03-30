'use client'

import { useEffect, useRef } from 'react'

interface FloatingOrbsBackgroundProps {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
}

export default function FloatingOrbsBackground({
  primaryColor = '#3B82F6',
  secondaryColor = '#8B5CF6',
  tertiaryColor = '#10B981',
}: FloatingOrbsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const orbs: {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
      pulseSpeed: number
      pulseOffset: number
    }[] = []

    const colors = [primaryColor, secondaryColor, tertiaryColor]

    for (let i = 0; i < 15; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.vx *= -1
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.vy *= -1

        const pulse = Math.sin(time * orb.pulseSpeed + orb.pulseOffset) * 0.2 + 0.8

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius * pulse
        )
        gradient.addColorStop(0, `${orb.color}40`)
        gradient.addColorStop(0.5, `${orb.color}20`)
        gradient.addColorStop(1, `${orb.color}00`)

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius * pulse, 0, Math.PI * 2)
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
