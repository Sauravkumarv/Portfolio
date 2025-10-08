import React, { memo, useMemo } from 'react';
import { Menu, X, Home, User, Briefcase, Settings, Mail } from 'lucide-react';

// Navigation data for better maintainability
const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'services', label: 'Services', icon: Settings },
  { id: 'contact', label: 'Contact', icon: Mail }
];

// Memoized components for better performance
const Logo = memo(function Logo() {
  return (
    <div
    className="relative group cursor-pointer select-none inline-block"
    role="button"
    tabIndex="0"
    aria-label="SK Verma Logo"
    style={{ isolation: 'isolate' }}
  >


    {/* Main content - IN FRONT with higher z-index */}
    <div className="relative font-extrabold tracking-tight" style={{ 
      fontFamily: "'Orbitron', 'Rajdhani', 'Exo 2', sans-serif",
      zIndex: 10
    }}>

      {/* ✨ Shimmer animated gradient text - ALWAYS VISIBLE */}
      <div 
        className="relative text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]"
        style={{ zIndex: 10 }}
      >
        {'SK Verma'.split('').map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-rotate-6 ${
              letter === ' ' ? 'w-3' : ''
            }`}
            style={{ 
              transitionDelay: `${index * 60}ms`
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>

      {/* 🌊 Animated underline bars */}
      <div className="flex mt-2 space-x-2 justify-center relative" style={{ zIndex: 10 }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
            style={{
              width: i === 1 ? '50px' : '25px',
              transitionDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    </div>

    {/* 🌈 Keyframe for shimmer */}
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Rajdhani:wght@700&family=Exo+2:wght@800&display=swap');
        
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}
    </style>
  </div>






//     <div className="group cursor-pointer" role="button" tabIndex="0" aria-label="SK Verma Logo">
//       <div className="text-xl md:text-2xl lg:text-3xl font-black relative whitespace-nowrap">
//         {/* Animated background gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse ">
//           SK Verma
//         </div>
        
//         {/* Main text with staggered animation */}
//         <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
//           {'SK Verma'.split('').map((letter, index) => (
//             <span 
//               key={index}
//               className={`inline-block transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 ${
//                 letter === '' ? 'w-4' : ''
//               }`}
//               style={{
//                 transitionDelay: `${index * 50}ms`,
//                 textShadow: 'none'
//               }}
//             >
//               {letter === ' ' ? '\u00A0' : letter}
//             </span>
//           ))}
//         </div>
        
//         {/* Creative underline effect */}
//         <div className="flex space-x-1 mt-1">
//           {[...Array(3)].map((_, i) => (
//             <div 
//               key={i}
//               className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"
//               style={{
//                 width: i === 1 ? '40px' : '20px',
//                 transitionDelay: `${i * 100}ms`
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// });
 ) })
const DesktopNavItem = memo(function DesktopNavItem({ item, index, scrollToSection, currentSection }) {
  const { id, label, icon: Icon } = item;
  const isActive = currentSection === id;
  
  return (
    <button
      onClick={() => scrollToSection(id)}
      className={`relative px-6 py-3 capitalize font-medium transition-all duration-300 group overflow-hidden rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isActive ? 'bg-white/10 text-blue-400' : 'hover:text-blue-400'
      }`}
      style={{animationDelay: `${index * 100}ms`}}
      aria-current={isActive ? 'page' : undefined}
      role="menuitem"
    >
      {/* Icon with animation */}
      <div className="flex items-center space-x-2">
        <Icon 
          size={18} 
          className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
            isActive ? 'text-blue-400' : ''
          }`} 
        />
        <span className="relative z-10 transition-colors duration-300">
          {label}
        </span>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
      
      {/* Active indicator */}
      <div className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ${
        isActive ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
      }`} />
      
      {/* Floating particles on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{
              top: `${20 + i * 20}%`,
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    </button>
  );
});

const MobileNavItem = memo(function MobileNavItem({ item, index, scrollToSection, setIsMenuOpen }) {
  const { id, label, icon: Icon } = item;
  
  return (
    <button
      onClick={() => {
        scrollToSection(id);
        setIsMenuOpen(false);
      }}
      className="group flex items-center w-full text-left py-4 px-6 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      style={{animationDelay: `${index * 100}ms`}}
      role="menuitem"
    >
      <Icon 
        size={20} 
        className="mr-4 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
      />
      <span className="capitalize font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </span>
      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
    </button>
  );
});

const Navigation = ({ isMenuOpen = false, setIsMenuOpen = () => {}, scrollY = 0, scrollToSection = () => {}, currentSection = '' }) => {
  // Memoize navigation styles for better performance
  const navStyles = useMemo(() => ({
    background: scrollY > 50 
      ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/10' 
      : 'bg-transparent'
  }), [scrollY]);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-500 ${navStyles.background}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Enhanced Logo */}
          <Logo />
          
          {/* Desktop Menu with enhanced styling */}
          <div className="hidden md:flex items-center space-x-2" role="menubar">
            {NAVIGATION_ITEMS.map((item, index) => (
              <DesktopNavItem
                key={item.id}
                item={item}
                index={index}
                scrollToSection={scrollToSection}
                currentSection={currentSection}
              />
            ))}
          </div>

          {/* Creative Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center group rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 overflow-hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-xl transform group-hover:scale-110 transition-transform duration-300" />
            
            {/* Creative dots animation */}
            <div className="relative z-10 w-6 h-6 flex flex-wrap gap-1 items-center justify-center">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ${
                    isMenuOpen 
                      ? i === 4 
                        ? 'scale-150 bg-gradient-to-r from-red-400 to-pink-500' 
                        : 'scale-50 opacity-50'
                      : 'scale-100 opacity-100 group-hover:scale-125'
                  }`}
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
            
            {/* Alternative: Morphing lines */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'w-4 rotate-45 translate-y-1' : 'w-6'
              }`} />
              <div className={`h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'w-0 opacity-0' : 'w-4'
              }`} />
              <div className={`h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'w-4 -rotate-45 -translate-y-1' : 'w-6'
              }`} />
            </div>
            
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-xl">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 rounded-xl border border-blue-500/30 transition-all duration-1000 ${
                    isMenuOpen ? 'scale-150 opacity-0' : 'scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100'
                  }`}
                  style={{
                    transitionDelay: `${i * 200}ms`
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 py-6 space-y-2 bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl mb-4 border border-white/10 shadow-2xl">
            {/* Menu header */}
            <div className="text-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto" />
            </div>
            
            {NAVIGATION_ITEMS.map((item, index) => (
              <MobileNavItem
                key={item.id}
                item={item}
                index={index}
                scrollToSection={scrollToSection}
                setIsMenuOpen={setIsMenuOpen}
              />
            ))}
            
            {/* Menu footer */}
            <div className="text-center mt-6 pt-4 border-t border-white/10">
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Display name for better debugging
Navigation.displayName = 'Navigation';

export default memo(Navigation);