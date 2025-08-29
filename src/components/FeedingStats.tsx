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
      {/* Daily Goal Progress */}
      <div className="fixed top-24 left-4 z-30 bg-gradient-to-br from-blue-900/90 to-cyan-900/90 backdrop-blur-md rounded-xl p-4 border border-cyan-400/30 shadow-2xl max-w-xs">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🎯</span>
            <div>
              <div className="text-sm font-medium text-cyan-300">Daily Community Goal</div>
              <div className="text-xs text-gray-400">Feed the turtles together!</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 transition-all duration-500 relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-400">0</span>
              <span className="text-sm font-bold text-white">
                {dailyGoal.current} / {dailyGoal.target}
              </span>
              <span className="text-xs text-gray-400">{dailyGoal.target}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs">
            <div className="text-center">
              <div className="text-gray-400">Progress</div>
              <div className="text-green-400 font-bold">{progress.toFixed(1)}%</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">Total Feeds</div>
              <div className="text-cyan-400 font-bold">{totalFeeds.toLocaleString()}</div>
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

      {/* Feeding Instructions (shows for first-time visitors) */}
      {totalFeeds < 5 && (
        <div className="fixed bottom-4 left-4 z-30 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-md rounded-xl p-4 border border-green-400/30 shadow-2xl max-w-xs animate-pulse">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">👆</span>
            <div>
              <div className="text-sm font-bold text-white">Click the turtles to feed them!</div>
              <div className="text-xs text-green-100">Help Sheldon & Nitro grow happy & strong 🐢💕</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}