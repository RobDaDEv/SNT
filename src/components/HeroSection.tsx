'use client'

import Image from 'next/image'

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
    <section className="relative min-h-screen ocean-gradient flex items-center justify-center overflow-hidden">
      {/* Animated Bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl opacity-70 animate-pulse">⭐</div>
        <div className="absolute top-40 right-20 text-2xl opacity-60 animate-coin-spin">💎</div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-50 animate-turtle-bounce">🌊</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24 lg:pt-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Live Rescue Mission in Progress
              </div>
              <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Rescued from <br className="hidden sm:block" />
                <span className="text-yellow-400 drop-shadow-lg">abandonment,</span><br className="hidden sm:block" />
                heading to <br className="hidden sm:block" />
                <span className="text-green-400 drop-shadow-lg">freedom</span> at<br className="hidden sm:block" />
                <span className="text-orange-400 drop-shadow-lg">$25M market cap.</span>
              </h1>
            </div>
            
            {/* Enhanced Progress Bar with Live Data */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/10 shadow-2xl max-w-lg mx-auto lg:mx-0">
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
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20 max-w-lg mx-auto lg:mx-0">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-400">Price</div>
                      <div className="text-base font-bold text-cyan-400">
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
                      <div className="text-sm text-gray-400">24h Volume</div>
                      <div className="text-base font-bold text-orange-400">
                        {marketData.volume24h >= 1000000 ? 
                          `$${(marketData.volume24h / 1000000).toFixed(1)}M` : 
                          `$${(marketData.volume24h / 1000).toFixed(0)}K`
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm lg:text-base max-w-md mx-auto lg:mx-0">
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
            
            <div className="space-y-4">
              <button 
                onClick={scrollToCommunity}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold transition-all transform hover:scale-105 glow w-full sm:w-auto shadow-2xl border border-cyan-400/20"
              >
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-rocket group-hover:animate-bounce"></i>
                  <span>JOIN THE RESCUE</span>
                </div>
              </button>
              
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start space-x-6 sm:space-x-8">
                  <a href="https://x.com/sheldon_nitro" target="_blank" rel="noopener noreferrer" className="group text-2xl sm:text-3xl hover:text-cyan-400 transition-all duration-300 p-3 rounded-full hover:bg-white/10 border border-transparent hover:border-cyan-400/30">
                    <i className="fab fa-twitter group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href="https://www.tiktok.com/@sheldon_nitro" target="_blank" rel="noopener noreferrer" className="group text-2xl sm:text-3xl hover:text-pink-400 transition-all duration-300 p-3 rounded-full hover:bg-white/10 border border-transparent hover:border-pink-400/30">
                    <i className="fab fa-tiktok group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href="https://pump.fun/coin/9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump" target="_blank" rel="noopener noreferrer" className="group text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-white/10 border border-transparent hover:border-green-400/30">
                    <i className="fas fa-play-circle group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300 font-medium">Contract Address:</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'); alert('Contract copied! 🐢')}} 
                      className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 px-2 py-1 rounded text-cyan-300 transition-colors"
                    >
                      <i className="fas fa-copy mr-1"></i>Copy
                    </button>
                  </div>
                  <code className="block text-xs lg:text-sm font-mono text-cyan-400 break-all cursor-pointer hover:text-cyan-300 transition-colors" 
                        onClick={() => {navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'); alert('Contract copied! 🐢')}}>
                    9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump
                  </code>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Turtle Characters */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-2xl min-h-[500px] flex items-center justify-center">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
              
              {/* Side-by-side layout for better visibility */}
              <div className="flex items-center justify-center space-x-8 lg:space-x-12 w-full">
                
                {/* Sheldon - Left side */}
                <div className="turtle-character flex flex-col items-center animate-turtle-bounce group">
                  <div className="relative">
                    <div className="turtle-glow w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-green-400/60 group-hover:border-green-400/90 transition-all bg-gradient-to-br from-green-50 to-green-200 backdrop-blur-sm group-hover:scale-105 transform duration-500">
                      <Image 
                        src="https://page.gensparksite.com/v1/base64_upload/3225a2daa440c0bdfc8027ca8ea557ef" 
                        alt="Sheldon the Wise Planner" 
                        width={250} 
                        height={250}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500 brightness-110 contrast-110"
                        priority
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-sm font-bold px-3 py-2 rounded-full animate-bounce shadow-xl border-2 border-white/20">
                      💭
                    </div>
                    {/* Enhanced glow ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-400/40 animate-pulse shadow-lg"></div>
                  </div>
                  <div className="text-center mt-4 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-green-400/30">
                    <div className="font-fredoka text-xl sm:text-2xl lg:text-3xl text-green-400 drop-shadow-lg mb-1">Sheldon</div>
                    <div className="text-sm sm:text-base text-gray-200 font-medium">The Wise Planner</div>
                  </div>
                </div>
                
                {/* Nitro - Right side */}
                <div className="turtle-character flex flex-col items-center animate-turtle-bounce group" style={{ animationDelay: '1s' }}>
                  <div className="relative">
                    <div className="turtle-glow-orange w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-orange-400/60 group-hover:border-orange-400/90 transition-all bg-gradient-to-br from-orange-50 to-orange-200 backdrop-blur-sm group-hover:scale-105 transform duration-500">
                      <Image 
                        src="https://page.gensparksite.com/v1/base64_upload/a11a95806b2737d8aec36640bea38c62" 
                        alt="Nitro the Bold Dreamer" 
                        width={250} 
                        height={250}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500 brightness-110 contrast-110"
                        priority
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-sm font-bold px-3 py-2 rounded-full animate-bounce shadow-xl border-2 border-white/20" style={{ animationDelay: '0.5s' }}>
                      💥
                    </div>
                    {/* Enhanced glow ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-orange-400/40 animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="text-center mt-4 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-orange-400/30">
                    <div className="font-fredoka text-xl sm:text-2xl lg:text-3xl text-orange-400 drop-shadow-lg mb-1">Nitro</div>
                    <div className="text-sm sm:text-base text-gray-200 font-medium">The Bold Dreamer</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements - repositioned for better visibility */}
              <div className="absolute top-16 left-16 animate-coin-spin text-2xl sm:text-3xl drop-shadow-lg opacity-80">💰</div>
              <div className="absolute top-20 right-16 animate-coin-spin text-xl sm:text-2xl drop-shadow-lg opacity-70" style={{ animationDelay: '0.5s' }}>🪙</div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-coin-spin text-lg sm:text-xl drop-shadow-lg opacity-75" style={{ animationDelay: '1s' }}>✨</div>
              <div className="absolute top-1/3 left-8 text-lg opacity-60 animate-pulse" style={{ animationDelay: '2s' }}>💎</div>
              <div className="absolute bottom-1/3 right-8 text-xl opacity-50 animate-turtle-bounce" style={{ animationDelay: '1.5s' }}>🌟</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}