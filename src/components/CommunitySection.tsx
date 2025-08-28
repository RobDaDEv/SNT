export default function CommunitySection() {
  const handleJoinClick = () => {
    navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump')
    alert('Contract address copied to clipboard! 🐢\n9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump')
  }

  return (
    <section id="community" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16 section-fade">
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
            Join the <span className="text-cyan-400">Turtle Squad</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the movement that&apos;s sending Sheldon and Nitro to freedom. 
            Every holder is a turtle rescuer!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 section-fade">
          <a href="https://x.com/sheldon_nitro" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 cursor-pointer">
            <i className="fab fa-twitter text-3xl lg:text-4xl text-cyan-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Follow on Twitter</h3>
            <p className="text-gray-400 text-sm lg:text-base">Daily updates, memes, and turtle rescue progress!</p>
          </a>
          
          <a href="https://www.tiktok.com/@sheldon_nitro" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-pink-500/50 transition-all transform hover:scale-105 cursor-pointer">
            <i className="fab fa-tiktok text-3xl lg:text-4xl text-pink-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Follow on TikTok</h3>
            <p className="text-gray-400 text-sm lg:text-base">Viral turtle content and fun rescue updates!</p>
          </a>
          
          <a href="https://pump.fun/coin/9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-green-500/50 transition-all transform hover:scale-105 cursor-pointer sm:col-span-2 lg:col-span-1">
            <i className="fas fa-play-circle text-3xl lg:text-4xl text-green-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Live Stream</h3>
            <p className="text-gray-400 text-sm lg:text-base">Watch live trading and rescue progress!</p>
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-red-500/10 p-6 lg:p-8 rounded-2xl border border-orange-500/30 section-fade shadow-2xl backdrop-blur-sm">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse shadow-lg">
                🐢
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl lg:text-3xl mb-4">Ready to Help Free the Turtles?</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-2 text-sm">Contract Address:</p>
              <code className="bg-gray-800/50 px-3 py-2 rounded text-xs lg:text-sm text-cyan-400 font-mono break-all block border border-gray-600">
                9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump
              </code>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <button 
                onClick={handleJoinClick}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Contract Address
              </button>
              <a href="https://pump.fun/coin/9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 font-bold inline-flex items-center justify-center">
                <i className="fas fa-chart-line mr-2"></i>
                View Chart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}