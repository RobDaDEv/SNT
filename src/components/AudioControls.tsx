'use client'

import { useState, useEffect } from 'react'
import { useAudio } from '@/hooks/useAudio'

const OCEAN_AMBIENT_AUDIO = 'https://cdn1.genspark.ai/user-upload-image/2/1cecccd1-05af-42e2-aa6e-e1356f4b0e0d.mp3'

export default function AudioControls() {
  const [isVisible, setIsVisible] = useState(false)
  const oceanAudio = useAudio(OCEAN_AMBIENT_AUDIO)

  useEffect(() => {
    // Show audio controls after page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const toggleOceanAudio = () => {
    if (oceanAudio.isPlaying) {
      oceanAudio.pause()
    } else {
      oceanAudio.play()
    }
  }

  // Auto-start ocean sounds and set loop
  useEffect(() => {
    const timer = setTimeout(() => {
      oceanAudio.play()
    }, 4000) // Start after page loads
    
    return () => clearTimeout(timer)
  }, [oceanAudio])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-30 space-y-2">
      {/* Ocean Sounds Toggle */}
      <div className="bg-blue-900/80 backdrop-blur-md border border-cyan-400/30 rounded-full p-3 shadow-lg">
        <button
          onClick={toggleOceanAudio}
          className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors"
          title={oceanAudio.isPlaying ? 'Pause Ocean Sounds' : 'Play Ocean Sounds'}
        >
          <span className="text-xl">
            {oceanAudio.isPlaying ? '🔊' : '🔇'}
          </span>
          <span className="text-sm font-medium">
            {oceanAudio.isPlaying ? 'Ocean ON' : 'Ocean OFF'}
          </span>
        </button>
      </div>

      {/* Volume Control (when playing) */}
      {oceanAudio.isPlaying && (
        <div className="bg-blue-900/80 backdrop-blur-md border border-cyan-400/30 rounded-xl p-3 shadow-lg">
          <div className="flex items-center space-x-2 text-white text-sm">
            <span>🔉</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={oceanAudio.volume}
              onChange={(e) => oceanAudio.setVolume(Number(e.target.value))}
              className="w-16 accent-cyan-400"
            />
            <span>🔊</span>
          </div>
        </div>
      )}
    </div>
  )
}