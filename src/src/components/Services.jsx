import React, { memo, useMemo } from 'react';
import { Globe, Smartphone, Megaphone, Code, Check, Star, ArrowRight } from 'lucide-react';
import  { useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Service Card Component
const ServiceCard = memo(({ service, isInView, index }) => {
  // const handleGetStarted = useCallback(() => {
  //   scrollToSection('contact');
  // }, [scrollToSection]);

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

  return (
    <div className={`group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
      isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${bgGradient}`} />
      <div className={`relative mb-6 text-${service.color}-400 group-hover:text-${service.color}-300 transition-colors duration-300 transform group-hover:scale-110`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{service.description}</p>
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </div>
  );
});

// Plan Card Component
const PlanCard = memo(({ plan, scrollToSection, isInView, index }) => {
  const handleGetStarted = useCallback(() => {
    scrollToSection('contact');
  }, [scrollToSection]);

  const bgGradient = useMemo(() => {
    switch (plan.color) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-600/5 to-cyan-600/5';
      case 'purple':
        return 'bg-gradient-to-br from-purple-600/10 to-pink-600/10';
      default:
        return 'bg-gradient-to-br from-cyan-600/5 to-blue-600/5';
    }
  }, [plan.color]);

  return (
    <div className={`relative group ${plan.popular ? 'transform scale-105 z-10' : ''} transition-all duration-500 hover:scale-105 ${
      isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`} style={{ transitionDelay: `${index * 150}ms` }}>
      {plan.popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Star size={16} className="mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            Most Popular
          </div>
        </div>
      )}
      <div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 ${plan.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' : 'border-white/10 hover:border-white/20'}`}>
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${bgGradient}`} />
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="mb-2">
            <span className={`text-5xl font-black bg-gradient-to-r ${plan.color === 'blue' ? 'from-blue-400 to-cyan-400' : plan.color === 'purple' ? 'from-purple-400 to-pink-400' : 'from-cyan-400 to-blue-400'} bg-clip-text text-transparent`}>
              {plan.price}
            </span>
          </div>
          <p className="text-gray-400 text-sm">{plan.period}</p>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">{plan.description}</p>
        </div>
        <ul className="space-y-4 mb-8 relative z-10">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center group/item">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${plan.color === 'blue' ? 'bg-blue-500/20 group-hover/item:bg-blue-500/30' : plan.color === 'purple' ? 'bg-purple-500/20 group-hover/item:bg-purple-500/30' : 'bg-cyan-500/20 group-hover/item:bg-cyan-500/30'}`}>
                <Check size={12} className={`${plan.color === 'blue' ? 'text-blue-400' : plan.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} />
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleGetStarted} className={`w-full relative py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group/btn ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white' : 'border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5'}`}>
          <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${plan.popular ? '' : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'}`} />
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={20} />
          </span>
        </button>
      </div>
      {plan.popular && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl transform scale-110" />}
    </div>
  );
});

const Services = ({ scrollToSection }) => {
  const { isInView, ref: sectionRef } = useScrollAnimation({ threshold: 0.1 });
  const services = useMemo(() => [
    { icon: <Globe size={48} />, title: "Web Development", description: "Modern, responsive websites built with cutting-edge technologies and best practices", color: "blue" },
    { icon: <Smartphone size={48} />, title: "Mobile Apps", description: "Cross-platform mobile applications for iOS and Android with native performance", color: "purple" },
    { icon: <Megaphone size={48} />, title: "Meta Ads Expert", description: "Result-driven Facebook & Instagram ad campaigns that boost visibility, generate leads, and increase sales", color: "pink" },
    { icon: <Code size={48} />, title: "API Development", description: "Robust backend APIs and database design for scalable, high-performance applications", color: "green" }
  ], []);

  const plans = useMemo(() => [
    { name: "Starter", price: "$399", period: "per project", description: "Perfect for small businesses and personal projects", features: ["Responsive Website","Up to 5 Pages","Basic SEO Optimization","Contact Form Integration","1 Month Free Support","Mobile Optimization"], popular: false, color: "blue" },
    { name: "Professional", price: "$999", period: "per project", description: "Ideal for growing businesses with advanced needs", features: ["Custom Web Application","Database Integration","Advanced SEO & Analytics","Content Management System","3 Months Free Support","Performance Optimization","Security Implementation","API Integration"], popular: true, color: "purple" },
    { name: "Enterprise", price: "$2,999", period: "per project", description: "Complete solution for large-scale projects", features: ["Full-Stack Development","Custom API Development","Advanced Security Features","Performance Optimization","6 Months Free Support","Training & Documentation","Multi-platform Deployment","24/7 Priority Support"], popular: false, color: "cyan" }
  ], []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Services & Pricing</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_forwards]" />
          </div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">Professional development services tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => <ServiceCard key={index} service={service} scrollToSection={scrollToSection} isInView={isInView} index={index} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <PlanCard key={index} plan={plan} scrollToSection={scrollToSection} isInView={isInView} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;