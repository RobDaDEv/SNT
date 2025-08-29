'use client'

import Image from 'next/image'
import TurtleFeeding from './TurtleFeeding'

interface MarketData {
  current: number
  target: number
  percentage: number
  status: 'loading' | 'live' | 'error' | 'no_data'
  price: string
  priceChange24h: number
  volume24h: number
  liquidity: number
  pairAddress?: string
  dexId?: string
  error?: string
  lastUpdated: string
}

interface HeroSectionProps {
  marketData: MarketData
}

export default function HeroSection({ marketData }: HeroSectionProps) {
  const scrollToCommunity = () => {
    const element = document.getElementById('community')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen ocean-gradient flex items-start justify-center overflow-hidden pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 lg:pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start min-h-[85vh]">
          {/* Left Content */}
          <div className="text-center order-2 lg:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Live Rescue Mission in Progress
              </div>
              <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Heading to <br className="hidden sm:block" />
                <span className="text-green-400 drop-shadow-lg">freedom</span> at<br className="hidden sm:block" />
                <span className="text-orange-400 drop-shadow-lg">$25M market cap</span>
              </h1>
            </div>
            
            {/* Enhanced Progress Bar with Live Data */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 shadow-2xl max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      marketData.status === 'live' ? 'bg-green-400 animate-pulse' :
                      marketData.status === 'loading' ? 'bg-yellow-400 animate-spin' :
                      marketData.status === 'error' ? 'bg-red-400 animate-pulse' :
                      'bg-gray-400'
                    }`}></div>
                    <span className="font-bold text-white text-sm lg:text-base">
                      Progress to Freedom
                      {marketData.status === 'live' && <span className="text-green-400 ml-1">LIVE</span>}
                      {marketData.status === 'loading' && <span className="text-yellow-400 ml-1">LOADING</span>}
                      {marketData.status === 'error' && <span className="text-red-400 ml-1">OFFLINE</span>}
                    </span>
                  </div>
                  <div className="text-xs lg:text-sm text-gray-300 font-medium">
                    {marketData.percentage.toFixed(1)}%
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-full h-6 lg:h-8 overflow-hidden border border-gray-600 shadow-inner">
                  <div className="progress-bar absolute inset-0 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: `${Math.min(marketData.percentage, 100)}%` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50"></div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="text-left">
                    <div className="text-lg lg:text-xl font-bold text-white">
                      {marketData.current >= 1000000 ? 
                        `$${(marketData.current / 1000000).toFixed(1)}M` : 
                        `$${(marketData.current / 1000).toFixed(0)}K`
                      }
                    </div>
                    <div className="text-xs text-gray-400">Current Market Cap</div>
                  </div>
                  <div className="flex items-center space-x-2 text-center">
                    <div className="text-xs text-gray-400">🐢 → 🌊</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg lg:text-xl font-bold text-green-400">$25M</div>
                    <div className="text-xs text-gray-400">Freedom Goal</div>
                  </div>
                </div>
              </div>
              
              {/* Live Market Stats */}
              {marketData.status === 'live' && (
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-3 border border-cyan-400/30 max-w-lg mx-auto">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-xs text-gray-400">Price</div>
                      <div className="text-sm font-bold text-cyan-400">
                        {parseFloat(marketData.price) < 0.001 ? 
                          `$${parseFloat(marketData.price).toExponential(2)}` : 
                          `$${parseFloat(marketData.price).toFixed(6)}`
                        }
                      </div>
                      <div className={`text-xs ${
                        marketData.priceChange24h > 0 ? 'text-green-400' : 
                        marketData.priceChange24h < 0 ? 'text-red-400' : 'text-gray-400'
                      }`}>
                        {marketData.priceChange24h > 0 ? '+' : ''}{marketData.priceChange24h.toFixed(2)}% 24h
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">24h Volume</div>
                      <div className="text-sm font-bold text-orange-400">
                        {marketData.volume24h >= 1000000 ? 
                          `$${(marketData.volume24h / 1000000).toFixed(1)}M` : 
                          `$${(marketData.volume24h / 1000).toFixed(0)}K`
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <p className="text-gray-300 text-sm lg:text-base max-w-md mx-auto">
                  {marketData.status === 'live' ? 
                    'Live market data! Help Sheldon & Nitro reach their freedom goal!' :
                    'Help Sheldon & Nitro reach their freedom goal! Every milestone brings them closer to the wild.'
                  }
                </p>
                {marketData.status === 'live' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Last updated: {new Date(marketData.lastUpdated).toLocaleTimeString()}
                  </p>
                )}
              </div>
            </div>
            
            {/* Centered Action Section - Made Bigger */}
            <div className="flex flex-col items-center space-y-6 lg:space-y-8 w-full">
              {/* Main Action Button - Bigger */}
              <button 
                onClick={scrollToCommunity}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full text-xl sm:text-2xl lg:text-3xl font-bold transition-all transform hover:scale-105 glow shadow-2xl border border-cyan-400/20 w-full max-w-md"
              >
                <div className="flex items-center justify-center space-x-3">
                  <i className="fas fa-rocket group-hover:animate-bounce text-2xl lg:text-3xl"></i>
                  <span>JOIN THE RESCUE</span>
                </div>
              </button>
              
              {/* Social Links - Bigger and Centered */}
              <div className="flex justify-center space-x-8 sm:space-x-10 lg:space-x-12">
                <a href="https://x.com/sheldon_nitro" target="_blank" rel="noopener noreferrer" className="group text-3xl sm:text-4xl lg:text-5xl hover:text-cyan-400 transition-all duration-300 p-4 lg:p-5 rounded-full hover:bg-white/10 border border-transparent hover:border-cyan-400/30">
                  <i className="fab fa-twitter group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://www.tiktok.com/@sheldon_nitro" target="_blank" rel="noopener noreferrer" className="group text-3xl sm:text-4xl lg:text-5xl hover:text-pink-400 transition-all duration-300 p-4 lg:p-5 rounded-full hover:bg-white/10 border border-transparent hover:border-pink-400/30">
                  <i className="fab fa-tiktok group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://pump.fun/coin/9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump" target="_blank" rel="noopener noreferrer" className="group text-3xl sm:text-4xl lg:text-5xl hover:text-green-400 transition-all duration-300 p-4 lg:p-5 rounded-full hover:bg-white/10 border border-transparent hover:border-green-400/30">
                  <i className="fas fa-video group-hover:scale-110 transition-transform"></i>
                </a>
              </div>

            </div>
          </div>
          
          {/* Right Content - Turtle Characters */}
          <div className="relative flex justify-center items-start order-1 lg:order-2">
            <div className="relative w-full max-w-4xl min-h-[500px] p-4">
              
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-80 h-80 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Turtle Showcase */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
                
                {/* SHELDON */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
                  
                  <div className="relative bg-gradient-to-br from-green-100 via-white to-emerald-100 rounded-3xl p-6 border-4 border-green-400/50 shadow-2xl backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 turtle-feedable">
                    <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-400 rounded-full animate-pulse"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image 
                          src="https://page.gensparksite.com/v1/base64_upload/3225a2daa440c0bdfc8027ca8ea557ef" 
                          alt="Sheldon the Wise Planner" 
                          width={300} 
                          height={300}
                          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                          priority
                        />
                      </div>
                      
                      <TurtleFeeding turtleName="sheldon" marketCap={marketData.current} />
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-fredoka text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                        SHELDON
                      </div>
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                        The Little Planner
                      </div>
                      <div className="mt-3 text-gray-700 font-medium text-sm">
                        "I'm super good at making plans, buddy!"
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* NITRO */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="relative bg-gradient-to-br from-orange-100 via-white to-yellow-100 rounded-3xl p-6 border-4 border-orange-400/60 shadow-2xl backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 turtle-feedable">
                    <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image 
                          src="https://page.gensparksite.com/v1/base64_upload/a11a95806b2737d8aec36640bea38c62" 
                          alt="Nitro the Bold Dreamer" 
                          width={300} 
                          height={300}
                          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                          priority
                        />
                      </div>
                      
                      <TurtleFeeding turtleName="nitro" marketCap={marketData.current} />
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-fredoka text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                        NITRO
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                        The Speedy Explorer
                      </div>
                      <div className="mt-3 text-gray-700 font-medium text-sm">
                        "I wanna zoom zoom through the water!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contract Address Section - Below Turtle Cards */}
              <div className="flex justify-center mt-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20 w-full max-w-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300 font-medium">Contract Address:</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'); alert('Contract copied! 🐢')}} 
                      className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 px-3 py-1 rounded-lg text-cyan-300 transition-colors font-bold"
                    >
                      <i className="fas fa-copy mr-1"></i>Copy
                    </button>
                  </div>
                  <code className="block text-xs font-mono text-cyan-400 break-all cursor-pointer hover:text-cyan-300 transition-colors text-center p-2 bg-black/20 rounded-lg" 
                        onClick={() => {navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'); alert('Contract copied! 🐢')}}>
                    9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}