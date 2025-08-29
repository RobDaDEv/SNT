'use client'

import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  x: number
  size: number
  delay: number
  duration: number
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate random bubbles
    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 20 + 10, // 10-30px
          delay: Math.random() * 8, // 0-8s delay
          duration: Math.random() * 6 + 8 // 8-14s duration
        })
      }
      setBubbles(newBubbles)
    }

    generateBubbles()
    
    // Regenerate bubbles periodically for variety
    const interval = setInterval(generateBubbles, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-up"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Inner bubble shine */}
          <div 
            className="absolute top-1 left-1 w-1/3 h-1/3 rounded-full bg-white/30"
            style={{
              filter: 'blur(1px)'
            }}
          />
        </div>
      ))}

      {/* Add some sparkle particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-cyan-300/40 text-xs animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        >
          ✨
        </div>
      ))}
    </div>
  )
}