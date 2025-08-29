'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import RoadmapSection from '@/components/RoadmapSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import OceanEffects from '@/components/OceanEffects'
import AudioControls from '@/components/AudioControls'
import FeedingStats from '@/components/FeedingStats'
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

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <OceanEffects />
      <AudioControls />
      <FeedingStats />
      <Navigation />
      <HeroSection marketData={marketData} />
      <StorySection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}