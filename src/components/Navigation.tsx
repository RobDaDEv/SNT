'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleJoinClick = () => {
    alert('Contract address will be added when you provide the mint address! 🐢')
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-900/95 to-cyan-800/95 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="text-2xl lg:text-3xl animate-pulse">🐢</div>
              <div className="flex flex-col">
                <span className="font-fredoka text-lg lg:text-xl xl:text-2xl text-white leading-tight">SHELDON</span>
                <span className="font-fredoka text-sm lg:text-base xl:text-lg text-cyan-300 leading-tight">& NITRO</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('story')} className="nav-link text-white hover:text-cyan-300 transition-all duration-300 font-medium text-sm xl:text-base relative group">
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('story')} className="nav-link text-white hover:text-cyan-300 transition-all duration-300 font-medium text-sm xl:text-base relative group">
                Meet the Turtles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('roadmap')} className="nav-link text-white hover:text-cyan-300 transition-all duration-300 font-medium text-sm xl:text-base relative group">
                Roadmap to Freedom
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('community')} className="nav-link text-white hover:text-cyan-300 transition-all duration-300 font-medium text-sm xl:text-base relative group">
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            
            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button onClick={handleJoinClick} className="hidden sm:flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-full font-bold text-sm lg:text-base text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl glow">
                <i className="fas fa-rocket mr-2"></i>
                JOIN THE RESCUE
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className={`hamburger-lines ${mobileMenuOpen ? 'active' : ''}`}>
                  <span className="line line1 block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                  <span className="line line2 block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                  <span className="line line3 block w-6 h-0.5 bg-white transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-16 bg-gradient-to-b from-blue-900/98 to-cyan-900/98 backdrop-blur-lg border-b border-cyan-400/20 shadow-2xl transition-all duration-300 ease-out mobile-menu ${mobileMenuOpen ? 'show' : 'transform -translate-y-full opacity-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <button onClick={() => scrollToSection('story')} className="mobile-nav-link block px-4 py-3 text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium w-full text-left">
            <i className="fas fa-book-open mr-3 text-cyan-400"></i>
            Our Story
          </button>
          <button onClick={() => scrollToSection('story')} className="mobile-nav-link block px-4 py-3 text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium w-full text-left">
            <i className="fas fa-heart mr-3 text-green-400"></i>
            Meet the Turtles
          </button>
          <button onClick={() => scrollToSection('roadmap')} className="mobile-nav-link block px-4 py-3 text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium w-full text-left">
            <i className="fas fa-map-marked-alt mr-3 text-yellow-400"></i>
            Roadmap to Freedom
          </button>
          <button onClick={() => scrollToSection('community')} className="mobile-nav-link block px-4 py-3 text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium w-full text-left">
            <i className="fas fa-users mr-3 text-purple-400"></i>
            Community
          </button>
          <div className="pt-4 border-t border-white/20">
            <button onClick={handleJoinClick} className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg glow">
              <i className="fas fa-rocket mr-2"></i>
              JOIN THE RESCUE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}