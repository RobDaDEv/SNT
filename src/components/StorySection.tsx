'use client'

import Image from 'next/image'

export default function StorySection() {
  return (
    <section id="story" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 section-fade">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-cyan-400/20">
            <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-cyan-300 font-medium text-sm lg:text-base">Origin Story</span>
          </div>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">Turtle Rescue</span><br className="sm:hidden" />
            <span className="text-white drop-shadow-lg">Story</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Two turtles named Sheldon and Nitro were adopted from a small pet shop. They lived a cozy life, but deep down, 
            <span className="text-yellow-400 font-semibold"> they dreamed of becoming legends.</span>
          </p>
        </div>
        
        {/* Character Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
          {/* Sheldon Card */}
          <div className="group section-fade enhanced-card">
            <div className="relative bg-gradient-to-br from-green-900/20 via-green-800/10 to-emerald-900/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 shadow-2xl hover:shadow-green-400/10 overflow-hidden">
              <div className="relative mb-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-green-400/30 group-hover:border-green-400/60 transition-all duration-500 shadow-lg group-hover:shadow-green-400/20">
                      <Image 
                        src="https://page.gensparksite.com/v1/base64_upload/3225a2daa440c0bdfc8027ca8ea557ef" 
                        alt="Sheldon the Wise Planner" 
                        width={128} 
                        height={128}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      🧠
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="font-fredoka text-2xl sm:text-3xl lg:text-4xl text-green-400 drop-shadow-lg">Sheldon</h3>
                </div>
                <div className="bg-green-400/10 rounded-full px-4 py-2 mb-6 inline-block">
                  <span className="text-green-300 font-semibold text-sm lg:text-base">The Wise Planner</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg mb-6">
                  Always thinking ahead, Sheldon maps out the journey to freedom. Every move is calculated, 
                  every community milestone planned. He believes in the power of 
                  <span className="text-green-400 font-semibold"> steady progress</span> and 
                  <span className="text-yellow-400 font-semibold"> diamond hands</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-green-400/5 rounded-xl p-4 border border-green-400/20">
                    <div className="text-green-400 font-bold text-lg lg:text-xl">🎯</div>
                    <div className="text-green-300 font-semibold text-sm">Strategic</div>
                  </div>
                  <div className="bg-green-400/5 rounded-xl p-4 border border-green-400/20">
                    <div className="text-green-400 font-bold text-lg lg:text-xl">💎</div>
                    <div className="text-green-300 font-semibold text-sm">HODL Master</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nitro Card */}
          <div className="group section-fade enhanced-card" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-orange-900/20 via-red-800/10 to-yellow-900/20 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-500 shadow-2xl hover:shadow-orange-400/10 overflow-hidden">
              <div className="relative mb-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-orange-400/30 group-hover:border-orange-400/60 transition-all duration-500 shadow-lg group-hover:shadow-orange-400/20">
                      <Image 
                        src="https://page.gensparksite.com/v1/base64_upload/a11a95806b2737d8aec36640bea38c62" 
                        alt="Nitro the Bold Dreamer" 
                        width={128} 
                        height={128}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.3s' }}>
                      💥
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <h3 className="font-fredoka text-2xl sm:text-3xl lg:text-4xl text-orange-400 drop-shadow-lg">Nitro</h3>
                </div>
                <div className="bg-orange-400/10 rounded-full px-4 py-2 mb-6 inline-block">
                  <span className="text-orange-300 font-semibold text-sm lg:text-base">The Bold Dreamer</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg mb-6">
                  The visionary who dares to dream big! Nitro sees beyond the pet shop walls, 
                  imagining a world where they&apos;re not just pets, but 
                  <span className="text-orange-400 font-semibold"> pioneers of freedom</span> in the 
                  <span className="text-cyan-400 font-semibold"> meme coin ocean</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-orange-400/5 rounded-xl p-4 border border-orange-400/20">
                    <div className="text-orange-400 font-bold text-lg lg:text-xl">⚡</div>
                    <div className="text-orange-300 font-semibold text-sm">High Energy</div>
                  </div>
                  <div className="bg-orange-400/5 rounded-xl p-4 border border-orange-400/20">
                    <div className="text-orange-400 font-bold text-lg lg:text-xl">🌟</div>
                    <div className="text-orange-300 font-semibold text-sm">Visionary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="section-fade" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-purple-400/20 shadow-2xl overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h3 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                  Freedom Through Community
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                  Instead of hiding in their shells, they decided to take over the meme world—one coin at a time. 
                  Together, they&apos;re building a <span className="text-cyan-400 font-semibold">community strong enough</span> to send them into the wild.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-cyan-400/30 shadow-xl">
                  <h4 className="font-fredoka text-xl lg:text-2xl text-cyan-400 mb-4">🎯 The Freedom Promise</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    The turtles will be <span className="text-green-400 font-semibold">released into the wild</span> once $TURT reaches a 
                    <span className="text-yellow-400 font-bold"> $25M market cap milestone</span>. 
                    Until then, they live on the blockchain, inspiring memes, games, and stories.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-cyan-400/10 rounded-lg p-3 text-center border border-cyan-400/20">
                      <div className="text-cyan-400 font-bold text-lg">🏠</div>
                      <div className="text-cyan-300 text-xs font-semibold">Pet Shop</div>
                    </div>
                    <div className="bg-yellow-400/10 rounded-lg p-3 text-center border border-yellow-400/20">
                      <div className="text-yellow-400 font-bold text-lg">📈</div>
                      <div className="text-yellow-300 text-xs font-semibold">$25M Goal</div>
                    </div>
                    <div className="bg-green-400/10 rounded-lg p-3 text-center border border-green-400/20">
                      <div className="text-green-400 font-bold text-lg">🌊</div>
                      <div className="text-green-300 text-xs font-semibold">Freedom</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16 section-fade" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg lg:text-xl text-gray-400 mb-6">
            Join Sheldon and Nitro on their journey from <span className="text-cyan-400">captivity</span> to <span className="text-green-400">freedom</span>
          </p>
          <button 
            onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-400/20"
          >
            <div className="flex items-center space-x-2">
              <span>Join the Movement</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}