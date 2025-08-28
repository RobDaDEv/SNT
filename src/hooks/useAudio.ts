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
      audioRef.current.addEventListener('loadedmetadata', () => {
        setState(prev => ({ ...prev, duration: audioRef.current?.duration || 0 }))
      })
      audioRef.current.addEventListener('timeupdate', () => {
        setState(prev => ({ ...prev, currentTime: audioRef.current?.currentTime || 0 }))
      })
      audioRef.current.addEventListener('ended', () => {
        setState(prev => ({ ...prev, isPlaying: false }))
      })
    }
    
    audioRef.current.play().then(() => {
      setState(prev => ({ ...prev, isPlaying: true }))
    }).catch(console.error)
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