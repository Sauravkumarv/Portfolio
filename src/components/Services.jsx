import React, { memo, useMemo, useCallback } from 'react';
import { Globe, Smartphone, Megaphone, Code, Check, Star, ArrowRight } from 'lucide-react';

// Mock hook for demo
const useScrollAnimation = ({ threshold }) => ({ 
  isInView: true, 
  ref: React.useRef(null) 
});

// Service Card Component
const ServiceCard = memo(({ service, isInView, index }) => {
  const bgGradient = useMemo(() => {
    switch (service.color) {
      case 'blue':
        return 'from-blue-600/10 to-cyan-600/10';
      case 'purple':
        return 'from-purple-600/10 to-pink-600/10';
      case 'pink':
        return 'from-pink-600/10 to-rose-600/10';
      default:
        return 'from-green-600/10 to-emerald-600/10';
    }
  }, [service.color]);

  const colorClass = useMemo(() => {
    switch (service.color) {
      case 'blue': return 'text-blue-400 group-hover:text-blue-300';
      case 'purple': return 'text-purple-400 group-hover:text-purple-300';
      case 'pink': return 'text-pink-400 group-hover:text-pink-300';
      default: return 'text-green-400 group-hover:text-green-300';
    }
  }, [service.color]);

  return (
    <div className={`group relative p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
      isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl bg-gradient-to-br ${bgGradient}`} />
      <div className={`relative mb-6 ${colorClass} transition-colors duration-300 transform group-hover:scale-110`}>
        {service.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{service.description}</p>
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </div>
  );
});

// Plan Card Component - FIXED MOBILE OVERLAP ISSUE
const PlanCard = memo(({ plan, scrollToSection, isInView, index }) => {
  const handleGetStarted = useCallback(() => {
    scrollToSection('contact');
  }, [scrollToSection]);

  const bgGradient = useMemo(() => {
    switch (plan.color) {
      case 'emerald':
        return 'bg-gradient-to-br from-emerald-600/8 to-teal-600/8';
      case 'purple':
        return 'bg-gradient-to-br from-purple-600/12 to-pink-600/12';
      case 'amber':
        return 'bg-gradient-to-br from-amber-600/8 to-orange-600/8';
      default:
        return 'bg-gradient-to-br from-blue-600/5 to-cyan-600/5';
    }
  }, [plan.color]);

  const priceGradient = useMemo(() => {
    switch (plan.color) {
      case 'emerald': return 'from-emerald-400 to-teal-400';
      case 'purple': return 'from-purple-400 to-pink-400';
      case 'amber': return 'from-amber-400 to-orange-400';
      default: return 'from-blue-400 to-cyan-400';
    }
  }, [plan.color]);

  const checkColors = useMemo(() => {
    switch (plan.color) {
      case 'emerald': return { bg: 'bg-emerald-500/20 group-hover/item:bg-emerald-500/30', text: 'text-emerald-400' };
      case 'purple': return { bg: 'bg-purple-500/20 group-hover/item:bg-purple-500/30', text: 'text-purple-400' };
      case 'amber': return { bg: 'bg-amber-500/20 group-hover/item:bg-amber-500/30', text: 'text-amber-400' };
      default: return { bg: 'bg-blue-500/20 group-hover/item:bg-blue-500/30', text: 'text-blue-400' };
    }
  }, [plan.color]);

  return (
    <div className={`relative group transition-all duration-500 hover:scale-105 ${
      isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    } ${
      // FIXED: Remove transform scale on mobile, only apply on desktop
      plan.popular ? 'md:transform md:scale-105 z-10' : ''
    }`} style={{ transitionDelay: `${index * 150}ms` }}>
      
      {/* FIXED: Popular badge positioning - more space on mobile */}
      {plan.popular && (
        <div className="absolute -top-6 md:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center shadow-lg">
            <Star size={14} className="mr-1.5 md:mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            Most Popular
          </div>
        </div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border transition-all duration-500 ${
        plan.popular ? 'border-purple-500/40 shadow-2xl shadow-purple-500/20 ring-1 ring-purple-400/20' : 
        plan.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10' :
        plan.color === 'amber' ? 'border-amber-500/20 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/10' :
        'border-white/10 hover:border-white/20'
      }`}>
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl ${bgGradient}`} />
        
        <div className="text-center mb-6 md:mb-8 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="mb-2">
            <span className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${priceGradient} bg-clip-text text-transparent`}>
              {plan.price}
            </span>
          </div>
          <p className="text-gray-400 text-xs md:text-sm">{plan.period}</p>
          <p className="text-gray-300 mt-3 md:mt-4 text-xs md:text-sm leading-relaxed">{plan.description}</p>
        </div>
        
        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 relative z-10">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start group/item">
              <div className={`w-4 md:w-5 h-4 md:h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-colors duration-200 ${checkColors.bg}`}>
                <Check size={10} className={checkColors.text} />
              </div>
              <span className="text-xs md:text-sm text-gray-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <button onClick={handleGetStarted} className={`w-full relative py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group/btn ${
          plan.popular ? 
            'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-purple-500/25 hover:shadow-purple-500/40' : 
          plan.color === 'emerald' ?
            'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40' :
          plan.color === 'amber' ?
            'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-500/25 hover:shadow-amber-500/40' :
            'border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5'
        }`}>
          <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${plan.popular ? '' : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'}`} />
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
          </span>
        </button>
      </div>
      
      {plan.popular && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl md:rounded-3xl blur-xl transform scale-110" />}
    </div>
  );
});

const Services = ({ scrollToSection = () => {} }) => {
  const { isInView, ref: sectionRef } = useScrollAnimation({ threshold: 0.1 });
  
  const services = useMemo(() => [
    { icon: <Globe size={48} />, title: "Web Development", description: "Modern, responsive websites built with cutting-edge technologies and best practices", color: "blue" },
    { icon: <Smartphone size={48} />, title: "Mobile Apps", description: "Cross-platform mobile applications for iOS and Android with native performance", color: "purple" },
    { icon: <Megaphone size={48} />, title: "Meta Ads Expert", description: "Result-driven Facebook & Instagram ad campaigns that boost visibility, generate leads, and increase sales", color: "pink" },
    { icon: <Code size={48} />, title: "API Development", description: "Robust backend APIs and database design for scalable, high-performance applications", color: "green" }
  ], []);

  const plans = useMemo(() => [
    { 
      name: "Starter", 
      price: "$399", 
      period: "per project", 
      description: "Perfect for small businesses and personal projects", 
      features: ["Responsive Website","Up to 5 Pages","Basic SEO Optimization","Contact Form Integration","1 Month Free Support","Mobile Optimization"], 
      popular: false, 
      color: "emerald",
      accent: "emerald"
    },
    { 
      name: "Professional", 
      price: "$999", 
      period: "per project", 
      description: "Ideal for growing businesses with advanced needs", 
      features: ["Custom Web Application","Database Integration","Advanced SEO & Analytics","Content Management System","3 Months Free Support","Performance Optimization","Security Implementation","API Integration"], 
      popular: true, 
      color: "purple",
      accent: "gradient"
    },
    { 
      name: "Enterprise", 
      price: "$2,999", 
      period: "per project", 
      description: "Complete solution for large-scale projects", 
      features: ["Full-Stack Development","Custom API Development","Advanced Security Features","Performance Optimization","6 Months Free Support","Training & Documentation","Multi-platform Deployment","24/7 Priority Support"], 
      popular: false, 
      color: "amber",
      accent: "premium"
    }
  ], []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative bg-gray-900 text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Services & Pricing
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mt-4 md:mt-6 max-w-3xl mx-auto px-4">
            Professional development services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} isInView={isInView} index={index} />
          ))}
        </div>

        {/* FIXED: Pricing Cards with proper spacing for mobile */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <div key={plan.name} className={index === 1 ? 'mt-8 md:mt-0' : ''}>
              <PlanCard plan={plan} scrollToSection={scrollToSection} isInView={isInView} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceCard.displayName = 'ServiceCard';
PlanCard.displayName = 'PlanCard';

export default Services;