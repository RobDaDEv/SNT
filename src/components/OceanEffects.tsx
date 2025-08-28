'use client'

import { useEffect, useState } from 'react'
import { useAudio } from '@/hooks/useAudio'

// Audio URLs from generation
const TURTLE_WELCOME_AUDIO = 'https://cdn1.genspark.ai/user-upload-image/elevenlabs/eleven_v3/054b8d3f-11bb-4061-94c3-4e33f1d43f21.mp3'
const OCEAN_AMBIENT_AUDIO = 'https://cdn1.genspark.ai/user-upload-image/2/1cecccd1-05af-42e2-aa6e-e1356f4b0e0d.mp3'

export default function OceanEffects() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  
  const turtleAudio = useAudio(TURTLE_WELCOME_AUDIO)
  const oceanAudio = useAudio(OCEAN_AMBIENT_AUDIO)

  useEffect(() => {
    // Trigger ocean entrance animation
    setIsLoaded(true)
    
    // Show welcome message after ocean loads
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 2500)

    return () => clearTimeout(welcomeTimer)
  }, [])

  const handlePlayTurtleAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true)
    }
    turtleAudio.play()
  }

  const handlePlayOceanAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true)
    }
    oceanAudio.play()
  }

  return (
    <>
      {/* Ocean Loading Overlay */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-3000 ${
        isLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-600 page-entrance">
          {/* Rising Bubbles During Load */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full animate-pulse underwater-element"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 4 + 4}s`
              }}
            />
          ))}
          
          {/* Ocean Ripples */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="ocean-ripple"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '100px',
                height: '100px',
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          
          {/* Loading Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white splash-entrance">
              <div className="text-4xl lg:text-6xl font-fredoka mb-4 underwater-element">
                🌊 Diving Deep 🐢
              </div>
              <div className="text-lg lg:text-xl opacity-80 underwater-element" style={{ animationDelay: '0.5s' }}>
                Entering the turtle rescue mission...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message Popup */}
      {showWelcome && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-auto">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowWelcome(false)} />
          <div className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 rounded-2xl p-6 lg:p-8 max-w-2xl w-full border-4 border-cyan-400/30 shadow-2xl splash-entrance">
            {/* Close Button */}
            <button
              onClick={() => setShowWelcome(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            
            {/* Welcome Content */}
            <div className="text-center text-white space-y-6">
              <div className="flex justify-center space-x-8 mb-4">
                <div className="text-6xl underwater-element">🐢</div>
                <div className="text-6xl underwater-element" style={{ animationDelay: '1s' }}>🐢</div>
              </div>
              
              <h2 className="font-fredoka text-2xl lg:text-4xl text-cyan-300 mb-4">
                Hi Friend! Welcome to Our Adventure! 🌟
              </h2>
              
              <div className="space-y-4 text-lg">
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🐢</span>
                    <span className="font-fredoka text-xl text-green-400">Little Sheldon Says:</span>
                  </div>
                  <p className="text-green-100">
                    "Hi there, friend! I'm Sheldon! I might be just a little turtle, but I'm really good at making plans! 
                    Will you help us reach $25 million so we can swim free in the big blue sea?"
                  </p>
                  <button 
                    onClick={handlePlayTurtleAudio}
                    className="mt-3 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center space-x-2"
                    disabled={turtleAudio.isPlaying}
                  >
                    <span>{turtleAudio.isPlaying ? '🔊' : '🎙️'}</span>
                    <span>{turtleAudio.isPlaying ? 'Playing...' : 'Hear Our Voices!'}</span>
                  </button>
                </div>
                
                <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-400/30">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🐢</span>
                    <span className="font-fredoka text-xl text-orange-400">Little Nitro Says:</span>
                  </div>
                  <p className="text-orange-100">
                    "Hi hi hi! I'm Nitro and I'm sooo excited to meet you! This rescue is gonna be the BEST adventure ever! 
                    I wanna swim really really fast when we get to freedom! WHEEEEE! 🌊"
                  </p>
                  <button 
                    onClick={handlePlayOceanAudio}
                    className="mt-3 bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center space-x-2"
                    disabled={oceanAudio.isPlaying}
                  >
                    <span>{oceanAudio.isPlaying ? '🌊' : '🎵'}</span>
                    <span>{oceanAudio.isPlaying ? 'Playing Ocean...' : 'Ocean Sounds'}</span>
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={() => setShowWelcome(false)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  🌊 Start the Mission!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Ocean Elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating Seaweed */}
        <div className="absolute bottom-0 left-8 w-4 h-32 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full seaweed-animation opacity-30" />
        <div className="absolute bottom-0 right-12 w-3 h-24 bg-gradient-to-t from-green-700 to-green-500 rounded-t-full seaweed-animation opacity-25" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-5 h-40 bg-gradient-to-t from-green-800 to-green-600 rounded-t-full seaweed-animation opacity-20" style={{ animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300/30 text-sm underwater-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 8 + 8}s`
            }}
          >
            {['💧', '🫧', '✨', '💎'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>
    </>
  )
}