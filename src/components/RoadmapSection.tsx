export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 section-fade">
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
            <span className="text-yellow-400">Roadmap to</span> Freedom
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Freed from the four walls of their tank, we are giving Turtle Rescue babies an opportunity to swim free.
          </p>
        </div>
        
        <div className="space-y-6 lg:space-y-8 section-fade">
          {/* Milestone 1 */}
          <div className="flex items-center space-x-4 lg:space-x-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 lg:p-6 rounded-xl border border-green-500/20">
            <div className="bg-green-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl flex-shrink-0">
              ✓
            </div>
            <div className="flex-1">
              <h3 className="font-fredoka text-lg lg:text-xl text-green-400 mb-2">Community Launch - COMPLETED</h3>
              <p className="text-gray-300 text-sm lg:text-base">Sheldon and Nitro made their blockchain debut! Community assembled, memes initiated.</p>
            </div>
            <div className="text-green-400 font-bold text-sm lg:text-base">$0 - $500K</div>
          </div>
          
          {/* Milestone 2 */}
          <div className="flex items-center space-x-4 lg:space-x-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 lg:p-6 rounded-xl border border-yellow-500/20">
            <div className="bg-yellow-500 text-black w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-fredoka text-lg lg:text-xl text-yellow-400 mb-2">Meme Domination</h3>
              <p className="text-gray-300 text-sm lg:text-base">Viral meme campaigns, community contests, and turtle mascot NFTs drop!</p>
            </div>
            <div className="text-yellow-400 font-bold text-sm lg:text-base">$500K - $5M</div>
          </div>
          
          {/* Milestone 3 */}
          <div className="flex items-center space-x-4 lg:space-x-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 lg:p-6 rounded-xl border border-blue-500/20">
            <div className="bg-blue-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-fredoka text-lg lg:text-xl text-blue-400 mb-2">Exchange Listings</h3>
              <p className="text-gray-300 text-sm lg:text-base">Major exchange partnerships and turtle rescue charity initiatives begin!</p>
            </div>
            <div className="text-blue-400 font-bold text-sm lg:text-base">$5M - $15M</div>
          </div>
          
          {/* Milestone 4 - The Freedom Goal */}
          <div className="flex items-center space-x-4 lg:space-x-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 lg:p-8 rounded-xl border-2 border-purple-500/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-pulse"></div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-bold text-xl lg:text-2xl relative z-10 flex-shrink-0">
              🏆
            </div>
            <div className="flex-1 relative z-10">
              <h3 className="font-fredoka text-xl lg:text-2xl text-purple-400 mb-2">THE GREAT FREEDOM! 🌊</h3>
              <p className="text-gray-300 text-base lg:text-lg">Sheldon and Nitro are released into the wild! Live stream event, global celebration, legend status achieved!</p>
            </div>
            <div className="text-purple-400 font-bold text-lg lg:text-xl relative z-10">$25M</div>
          </div>
        </div>
      </div>
    </section>
  )
}