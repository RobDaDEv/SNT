'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import RoadmapSection from '@/components/RoadmapSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import OceanEffects from '@/components/OceanEffects'
// AudioControls removed for simpler audio experience
// FeedingStats removed for cleaner UI
import FloatingBubbles from '@/components/FloatingBubbles'
import { useMarketData } from '@/hooks/useMarketData'

export default function Home() {
  const { marketData, isLoading } = useMarketData()

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.section-fade').forEach(el => {
      observer.observe(el)
    })

    // Simple page load sound effect - one time only
    const playPageLoadSound = () => {
      try {
        const audio = new Audio('https://cdn1.genspark.ai/user-upload-image/2/1cecccd1-05af-42e2-aa6e-e1356f4b0e0d.mp3')
        audio.volume = 0.3
        audio.play().catch(() => {
          // Silent fail if audio can't play
        })
      } catch (error) {
        // Silent fail
      }
    }

    // Play sound after a short delay
    const soundTimer = setTimeout(playPageLoadSound, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(soundTimer)
    }
  }, [])

  return (
    <main>
      <OceanEffects />
      <FloatingBubbles />
      <Navigation />
      <HeroSection marketData={marketData} />
      <StorySection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}