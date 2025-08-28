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
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <i className="fab fa-telegram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <i className="fab fa-discord text-xl"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 Sheldon & Nitro. Not financial advice. DYOR before swimming with the turtles! 🐢
        </p>
      </div>
    </footer>
  )
}