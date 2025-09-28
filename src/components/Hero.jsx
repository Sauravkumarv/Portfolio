import React, { memo, useMemo, useCallback } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css'

const Hero = ({ isLoaded, scrollToSection }) => {
  // ✅ Memoize click handler
  const handleScroll = useCallback(() => {
    scrollToSection('projects');
  }, [scrollToSection]);

  // ✅ Memoize floating elements
  const floatingElements = useMemo(() => (
    <>
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rounded-lg transform rotate-12 animate-bounce [animation-duration:3s]" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
    </>
  ), []);




  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Animated Title */}
        {/* Animated Title */}
        <div className="overflow-hidden mb-6">
  <h1
    className={`text-4xl md:text-6xl lg:text-7xl font-black mb-4
                will-change-transform will-change-opacity
                ${isLoaded ? 'animate-fadeSlideIn' : 'opacity-0'}`}
    style={{ lineHeight: '1.2', paddingBottom: '0.1em' }} // Add padding for descenders
  >
    <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
     Solutions
    </span>
    <br />
    <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
      Designed to Grow !
    </span>
  </h1>
</div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light">
            Crafting digital experiences that blend
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium"> innovation </span>
            with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium"> elegance</span>
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={handleScroll}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10 flex items-center">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </span>
          </button>

          <button className="group relative px-8 py-4 border-2 border-white/20 rounded-full font-medium text-lg backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:bg-white/5">
            <span className="flex items-center">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Floating Elements */}
        {floatingElements}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// ✅ Prevent unnecessary re-renders
export default memo(Hero);
