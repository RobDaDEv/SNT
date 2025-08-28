'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import RoadmapSection from '@/components/RoadmapSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'

export default function Home() {
  const [marketData, setMarketData] = useState({
    current: 150000,
    target: 25000000,
    percentage: 0.6,
    status: 'demo'
  })

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
      <Navigation />
      <HeroSection marketData={marketData} />
      <StorySection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}