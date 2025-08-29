'use client'

import { useState, useEffect } from 'react'

interface DailyGoal {
  target: number
  current: number
  date: string
}

export default function FeedingStats() {
  const [dailyGoal, setDailyGoal] = useState<DailyGoal>({
    target: 500,
    current: 0,
    date: new Date().toDateString()
  })
  const [totalFeeds, setTotalFeeds] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    // Load saved stats
    const savedGoal = localStorage.getItem('daily-feeding-goal')
    const savedTotalFeeds = localStorage.getItem('global-turtle-feeds')
    
    if (savedGoal) {
      const goal = JSON.parse(savedGoal)
      // Check if it's a new day
      if (goal.date !== new Date().toDateString()) {
        // Reset daily goal for new day
        const newGoal = {
          target: 500,
          current: 0,
          date: new Date().toDateString()
        }
        setDailyGoal(newGoal)
        localStorage.setItem('daily-feeding-goal', JSON.stringify(newGoal))
      } else {
        setDailyGoal(goal)
      }
    }
    
    if (savedTotalFeeds) {
      setTotalFeeds(parseInt(savedTotalFeeds))
    }

    // Listen for feeding updates
    const handleStorageChange = () => {
      const newTotalFeeds = localStorage.getItem('global-turtle-feeds')
      if (newTotalFeeds) {
        const feedCount = parseInt(newTotalFeeds)
        setTotalFeeds(feedCount)
        
        // Update daily goal
        setDailyGoal(prev => {
          const today = new Date().toDateString()
          if (prev.date !== today) {
            // New day - reset
            return {
              target: 500,
              current: 1,
              date: today
            }
          } else {
            const newCurrent = prev.current + 1
            const newGoal = { ...prev, current: newCurrent }
            localStorage.setItem('daily-feeding-goal', JSON.stringify(newGoal))
            
            // Check if goal reached
            if (newCurrent === prev.target) {
              setShowCelebration(true)
              setTimeout(() => setShowCelebration(false), 5000)
            }
            
            return newGoal
          }
        })
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom events (for same-tab updates)
    const handleCustomFeedEvent = () => handleStorageChange()
    window.addEventListener('turtleFed', handleCustomFeedEvent)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('turtleFed', handleCustomFeedEvent)
    }
  }, [])

  const progress = (dailyGoal.current / dailyGoal.target) * 100

  return (
    <>
      {/* Daily Goal Progress - Redesigned */}
      <div className="fixed top-6 left-6 z-30 bg-black/40 backdrop-blur-lg rounded-2xl p-4 border border-cyan-400/20 shadow-xl max-w-sm">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🌊</div>
            <div>
              <h3 className="text-lg font-bold text-white">Community Goal</h3>
              <p className="text-sm text-cyan-300">{dailyGoal.current.toLocaleString()} / {dailyGoal.target.toLocaleString()} feeds</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-800/60 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="mt-2 text-right">
              <span className="text-sm font-bold text-cyan-400">{progress.toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Goal Celebration */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-8 py-6 rounded-2xl font-bold text-2xl animate-bounce shadow-2xl border-4 border-white/30 text-center">
            <div className="text-4xl mb-2">🎉🐢🎉</div>
            <div>DAILY GOAL REACHED!</div>
            <div className="text-lg mt-2">The turtle squad is so happy! 💕</div>
          </div>
        </div>
      )}

      {/* Instructions removed to prevent overlap */}
    </>
  )
}