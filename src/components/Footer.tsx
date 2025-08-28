export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="text-3xl">🐢</div>
          <span className="font-fredoka text-2xl">SHELDON & NITRO</span>
        </div>
        <p className="text-gray-400 mb-6">
          Together, we&apos;re not just turtles—we&apos;re a movement toward freedom.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://x.com/sheldon_nitro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://www.tiktok.com/@sheldon_nitro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110">
            <i className="fab fa-tiktok text-xl"></i>
          </a>
          <a href="https://pump.fun/coin/9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
            <i className="fas fa-play-circle text-xl"></i>
          </a>
        </div>
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">Contract Address:</p>
          <code className="bg-gray-800 px-3 py-1 rounded text-xs text-cyan-400 font-mono cursor-pointer hover:bg-gray-700 transition-colors" 
                onClick={() => {navigator.clipboard.writeText('9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'); alert('Contract address copied!')}}>
            9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump
          </code>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 Sheldon & Nitro. Not financial advice. DYOR before swimming with the turtles! 🐢
        </p>
      </div>
    </footer>
  )
}