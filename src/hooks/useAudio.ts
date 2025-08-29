import { useState, useRef, useCallback } from 'react'

interface AudioState {
  isPlaying: boolean
  duration: number
  currentTime: number
  volume: number
}

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    volume: 1
  })

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      
      // Check if this is an ocean/ambient sound that should loop
      const isOceanSound = src.includes('ocean') || src.includes('ambient')
      if (isOceanSound) {
        audioRef.current.loop = true
        audioRef.current.preload = 'auto'
      }
      
      audioRef.current.addEventListener('loadedmetadata', () => {
        setState(prev => ({ ...prev, duration: audioRef.current?.duration || 0 }))
      })
      
      audioRef.current.addEventListener('timeupdate', () => {
        setState(prev => ({ ...prev, currentTime: audioRef.current?.currentTime || 0 }))
      })
      
      // Handle audio end - for non-looping sounds only
      audioRef.current.addEventListener('ended', () => {
        if (!audioRef.current?.loop) {
          setState(prev => ({ ...prev, isPlaying: false }))
        }
      })
      
      // Handle errors by restarting looping audio
      audioRef.current.addEventListener('error', () => {
        console.warn('Audio error, attempting restart...')
        if (isOceanSound && audioRef.current) {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.load()
              audioRef.current.play().catch(console.error)
            }
          }, 1000)
        }
      })
    }
    
    audioRef.current.play().then(() => {
      setState(prev => ({ ...prev, isPlaying: true }))
    }).catch(error => {
      console.error('Audio play error:', error)
      setState(prev => ({ ...prev, isPlaying: false }))
    })
  }, [src])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      setState(prev => ({ ...prev, isPlaying: false }))
    }
  }, [])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setState(prev => ({ ...prev, isPlaying: false, currentTime: 0 }))
    }
  }, [])

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      setState(prev => ({ ...prev, volume }))
    }
  }, [])

  return {
    ...state,
    play,
    pause,
    stop,
    setVolume
  }
}