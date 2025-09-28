import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Code } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading animation
    setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-white text-black px-4 py-2 rounded">Skip to content</a>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
            transition: 'all 0.5s ease-out',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl animate-bounce"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            left: '20%',
            top: '60%',
            animationDuration: '3s'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Loading Animation */}
      <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-500/20 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{animationDuration: '0.8s'}} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code size={24} className="text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 bg-blue-500/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)'
        }}
      />

      {/* Navigation */}
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
      />

      {/* Hero Section */}
      <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />

      {/* About Section */}
      <About  
      scrollToSection={scrollToSection}
      />

      {/* Projects Section */}
      <Suspense fallback={<div className="py-24 text-center text-gray-400">Loading projects…</div>}>
        <Projects />
      </Suspense>

      {/* Services & Pricing Section */}
      <Suspense fallback={<div className="py-24 text-center text-gray-400">Loading services…</div>}>
        <Services scrollToSection={scrollToSection} />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div className="py-24 text-center text-gray-400">Loading contact…</div>}>
        <Contact scrollToSection={scrollToSection} />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer scrollToSection={scrollToSection} />
      </Suspense>
    </div>
  );
};

export default Portfolio;