'use client'

import { useState, useEffect, useCallback } from 'react'
import { useAudio } from '@/hooks/useAudio'

// Audio URLs
const FEEDING_SOUND_URL = 'https://cdn1.genspark.ai/user-upload-image/2/45780aa2-bb98-43c2-a8d4-b1b8258d7823.mp3'

interface FeedingParticle {
  id: number
  x: number
  y: number
  emoji: string
  timestamp: number
}

interface TurtleMood {
  happiness: number
  energy: number
  lastFed: number
  totalFeeds: number
}

interface TurtleFeedingProps {
  turtleName: 'sheldon' | 'nitro'
  marketCap: number
}

// Food emojis for different types
const FOOD_EMOJIS = ['🥬', '🥕', '🐟', '🦐', '🌱', '🍃', '🥒', '🫐']

// Happy sounds/reactions
const HAPPY_REACTIONS = {
  sheldon: ['😊', '🤓', '💭', '👍', '🌟'],
  nitro: ['😄', '🤩', '💥', '🚀', '⚡']
}

export default function TurtleFeeding({ turtleName, marketCap }: TurtleFeedingProps) {
  const [particles, setParticles] = useState<FeedingParticle[]>([])
  const [mood, setMood] = useState<TurtleMood>({
    happiness: 50,
    energy: 50,
    lastFed: 0,
    totalFeeds: 0
  })
  const [showReaction, setShowReaction] = useState('')
  const [globalFeeds, setGlobalFeeds] = useState(1234) // Starting count
  const [showMilestone, setShowMilestone] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })
  
  // Audio for feeding sounds
  const feedingAudio = useAudio(FEEDING_SOUND_URL)

  // Load saved data from localStorage
  useEffect(() => {
    const savedMood = localStorage.getItem(`turtle-mood-${turtleName}`)
    const savedGlobalFeeds = localStorage.getItem('global-turtle-feeds')
    
    if (savedMood) {
      setMood(JSON.parse(savedMood))
    }
    if (savedGlobalFeeds) {
      setGlobalFeeds(parseInt(savedGlobalFeeds))
    }
  }, [turtleName])

  // Save data to localStorage
  const saveData = useCallback((newMood: TurtleMood, newGlobalFeeds: number) => {
    localStorage.setItem(`turtle-mood-${turtleName}`, JSON.stringify(newMood))
    localStorage.setItem('global-turtle-feeds', newGlobalFeeds.toString())
  }, [turtleName])

  // Calculate turtle happiness based on market cap and recent feeding
  const calculateHappiness = useCallback(() => {
    const marketCapBonus = Math.min((marketCap / 25000000) * 30, 30) // Max 30 happiness from market cap
    const timeSinceLastFeed = Date.now() - mood.lastFed
    const feedingBonus = timeSinceLastFeed < 300000 ? 20 : 0 // 5 minute bonus
    const baseHappiness = Math.max(30, 100 - Math.floor(timeSinceLastFeed / 600000) * 5) // Decay over time
    
    return Math.min(100, baseHappiness + marketCapBonus + feedingBonus)
  }, [marketCap, mood.lastFed])

  // Feed the turtle!
  const feedTurtle = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    setClickPosition({ x, y })
    
    // Play feeding sound
    feedingAudio.play()
    
    // Create food particle
    const newParticle: FeedingParticle = {
      id: Date.now(),
      x,
      y,
      emoji: FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)],
      timestamp: Date.now()
    }
    
    setParticles(prev => [...prev, newParticle])
    
    // Update mood and counters
    const newTotalFeeds = mood.totalFeeds + 1
    const newGlobalFeeds = globalFeeds + 1
    const newMood: TurtleMood = {
      happiness: Math.min(100, mood.happiness + Math.random() * 10 + 5),
      energy: Math.min(100, mood.energy + Math.random() * 8 + 3),
      lastFed: Date.now(),
      totalFeeds: newTotalFeeds
    }
    
    setMood(newMood)
    setGlobalFeeds(newGlobalFeeds)
    saveData(newMood, newGlobalFeeds)
    
    // Show happy reaction
    const reactions = HAPPY_REACTIONS[turtleName]
    setShowReaction(reactions[Math.floor(Math.random() * reactions.length)])
    setTimeout(() => setShowReaction(''), 2000)
    
    // Check for milestones
    if (newTotalFeeds % 10 === 0) {
      setShowMilestone(true)
      setTimeout(() => setShowMilestone(false), 3000)
    }
    
    // Clean up old particles
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id))
    }, 2000)
  }, [mood, globalFeeds, turtleName, saveData])

  // Update happiness periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newHappiness = calculateHappiness()
      if (newHappiness !== mood.happiness) {
        setMood(prev => ({ ...prev, happiness: newHappiness }))
      }
    }, 10000) // Update every 10 seconds
    
    return () => clearInterval(interval)
  }, [calculateHappiness, mood.happiness])

  // Get turtle mood description
  const getMoodDescription = () => {
    if (mood.happiness >= 80) return { text: "Super Happy! 🥳", color: "text-green-400" }
    if (mood.happiness >= 60) return { text: "Happy 😊", color: "text-green-300" }
    if (mood.happiness >= 40) return { text: "Content 😌", color: "text-yellow-400" }
    if (mood.happiness >= 20) return { text: "Hungry 😕", color: "text-orange-400" }
    return { text: "Very Hungry! 😢", color: "text-red-400" }
  }

  const moodDesc = getMoodDescription()

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Make turtle clickable for feeding */}
      <div 
        className="absolute inset-0 pointer-events-auto cursor-pointer z-20"
        onClick={feedTurtle}
        title={`Feed ${turtleName === 'sheldon' ? 'Sheldon' : 'Nitro'}! Click to give food 🍽️`}
      >
        {/* Feeding particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute text-2xl pointer-events-none animate-bounce z-30"
            style={{
              left: particle.x - 12,
              top: particle.y - 12,
              animation: 'feedingParticle 2s ease-out forwards'
            }}
          >
            {particle.emoji}
          </div>
        ))}
        
        {/* Click ripple effect */}
        {clickPosition.x > 0 && (
          <div
            className="absolute w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none animate-ping z-30"
            style={{
              left: clickPosition.x - 16,
              top: clickPosition.y - 16
            }}
          />
        )}
        
        {/* Happy reaction */}
        {showReaction && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-bounce z-30 pointer-events-none">
            {showReaction}
          </div>
        )}
      </div>
      
      {/* Turtle mood indicator */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20 z-25 pointer-events-none">
        <div className="flex items-center space-x-2 text-xs">
          <div className="flex items-center space-x-1">
            <span>💖</span>
            <div className="w-12 h-1.5 bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-500"
                style={{ width: `${mood.happiness}%` }}
              />
            </div>
          </div>
          <span className={`font-medium ${moodDesc.color}`}>
            {moodDesc.text}
          </span>
        </div>
      </div>
      
      {/* Feeding counter */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20 z-25 pointer-events-none">
        <div className="text-center">
          <div className="text-xs text-gray-300">Times Fed</div>
          <div className="text-lg font-bold text-white">{mood.totalFeeds}</div>
        </div>
      </div>
      
      {/* Milestone celebration */}
      {showMilestone && (
        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-6 py-3 rounded-xl font-bold text-lg animate-bounce shadow-2xl border-2 border-white/30">
            🎉 {mood.totalFeeds} Feeds! Keep Going! 🎉
          </div>
        </div>
      )}
      
      {/* Global feeding stats */}
      <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/10 z-25 pointer-events-none">
        <div className="text-xs text-gray-300 text-center">
          <div>🌍 Total Community Feeds</div>
          <div className="text-sm font-bold text-cyan-400">{globalFeeds.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}