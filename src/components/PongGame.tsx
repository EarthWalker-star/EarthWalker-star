'use client'

import { useEffect, useRef, useState } from 'react'

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [playerScore, setPlayerScore] = useState(0)
  const [botScore, setBotScore] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Game objects
    const paddleWidth = 10
    const paddleHeight = 60
    const ballSize = 8

    const player = {
      x: 20,
      y: canvas.height / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0,
      speed: 6,
    }

    const bot = {
      x: canvas.width - 30,
      y: canvas.height / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      dy: 0,
      speed: 4,
    }

    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: ballSize,
      dx: 4,
      dy: 4,
      speed: 4,
    }

    let animationId: number

    const resetBall = () => {
      ball.x = canvas.width / 2
      ball.y = canvas.height / 2
      ball.dx = -ball.dx
      ball.speed = 4
    }

    const update = () => {
      if (!gameStarted) return

      // Player movement
      player.y += player.dy
      if (player.y < 0) player.y = 0
      if (player.y + player.height > canvas.height) player.y = canvas.height - player.height

      // Bot AI
      const botCenter = bot.y + bot.height / 2
      if (botCenter < ball.y - 10) {
        bot.y += bot.speed
      } else if (botCenter > ball.y + 10) {
        bot.y -= bot.speed
      }
      if (bot.y < 0) bot.y = 0
      if (bot.y + bot.height > canvas.height) bot.y = canvas.height - bot.height

      // Ball movement
      ball.x += ball.dx
      ball.y += ball.dy

      // Ball collision with top/bottom
      if (ball.y - ball.size / 2 < 0 || ball.y + ball.size / 2 > canvas.height) {
        ball.dy = -ball.dy
      }

      // Ball collision with paddles
      if (
        ball.x - ball.size / 2 < player.x + player.width &&
        ball.y > player.y &&
        ball.y < player.y + player.height
      ) {
        ball.dx = Math.abs(ball.dx)
        ball.speed += 0.5
        ball.dx = ball.speed
      }

      if (
        ball.x + ball.size / 2 > bot.x &&
        ball.y > bot.y &&
        ball.y < bot.y + bot.height
      ) {
        ball.dx = -Math.abs(ball.dx)
        ball.speed += 0.5
        ball.dx = -ball.speed
      }

      // Scoring
      if (ball.x < 0) {
        setBotScore((prev) => prev + 1)
        resetBall()
      }
      if (ball.x > canvas.width) {
        setPlayerScore((prev) => prev + 1)
        resetBall()
      }
    }

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw center line
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = '#333'
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, 0)
      ctx.lineTo(canvas.width / 2, canvas.height)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw paddles
      ctx.fillStyle = '#00FF00'
      ctx.fillRect(player.x, player.y, player.width, player.height)
      ctx.fillRect(bot.x, bot.y, bot.width, bot.height)

      // Draw ball
      ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.size / 2, 0, Math.PI * 2)
      ctx.fillStyle = '#00FF00'
      ctx.fill()
      ctx.closePath()

      // Draw scores
      ctx.font = '24px monospace'
      ctx.fillStyle = '#00FF00'
      ctx.textAlign = 'center'
      ctx.fillText(playerScore.toString(), canvas.width / 4, 30)
      ctx.fillText(botScore.toString(), (3 * canvas.width) / 4, 30)

      if (!gameStarted) {
        ctx.font = '16px monospace'
        ctx.fillStyle = '#00FF00'
        ctx.textAlign = 'center'
        ctx.fillText('Click to start', canvas.width / 2, canvas.height / 2)
      }
    }

    const gameLoop = () => {
      update()
      draw()
      animationId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    // Mouse control
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseY = e.clientY - rect.top
      player.y = mouseY - player.height / 2
      if (player.y < 0) player.y = 0
      if (player.y + player.height > canvas.height) player.y = canvas.height - player.height
    }

    const handleClick = () => {
      if (!gameStarted) {
        setGameStarted(true)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
    }
  }, [gameStarted, playerScore, botScore])

  return (
    <div className="mt-8">
      <p className="text-gray-500 text-xs mb-2">// Pong Game - Click to start</p>
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="border border-gray-700 bg-[#0a0a0a] cursor-none"
      />
      <p className="text-gray-500 text-xs mt-2">Control: Mouse movement</p>
    </div>
  )
}
