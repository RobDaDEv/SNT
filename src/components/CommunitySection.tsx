export default function CommunitySection() {
  const handleJoinClick = () => {
    alert('Contract address will be added when you provide the mint address! 🐢')
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
          <div className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <i className="fab fa-twitter text-3xl lg:text-4xl text-cyan-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Follow on Twitter</h3>
            <p className="text-gray-400 text-sm lg:text-base">Daily updates, memes, and turtle rescue progress!</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <i className="fab fa-telegram text-3xl lg:text-4xl text-cyan-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Join Telegram</h3>
            <p className="text-gray-400 text-sm lg:text-base">Chat with the turtle squad community 24/7!</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 lg:p-8 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-colors sm:col-span-2 lg:col-span-1">
            <i className="fab fa-discord text-3xl lg:text-4xl text-cyan-400 mb-3 lg:mb-4"></i>
            <h3 className="font-fredoka text-lg lg:text-xl mb-3 lg:mb-4">Discord Server</h3>
            <p className="text-gray-400 text-sm lg:text-base">Gaming, contests, and exclusive turtle content!</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-red-500/10 p-6 lg:p-8 rounded-2xl border border-orange-500/30 section-fade shadow-2xl backdrop-blur-sm">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse shadow-lg">
                🐢
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl lg:text-3xl mb-4">Ready to Help Free the Turtles?</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">Contract address will be added here when you provide the mint address!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <button 
                onClick={handleJoinClick}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Contract Address
              </button>
              <button className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 font-bold">
                <i className="fas fa-chart-line mr-2"></i>
                View Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}