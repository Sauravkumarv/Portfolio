import React, { memo } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Memoized Contact Card Component
const ContactCard = memo(({ icon: Icon, title, value, description, gradient, isInView, index }) => (
  <div className={`group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
    isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
  }`} style={{ transitionDelay: `${index * 100}ms` }}>
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${gradient.replace('from-', 'from-').replace('to-', '/10 to-')}/10`} />
    
    <div className="flex items-start space-x-4 relative z-10">
      <div className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 font-medium mb-1">{value}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>

    <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-xor" />
  </div>
));

// Memoized Social Link Component
const SocialLink = memo(({ icon: Icon, name, gradient, isInView, index }) => (
  <a className={`group relative p-4 bg-gradient-to-r ${gradient} rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
    isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
  }`} style={{ transitionDelay: `${index * 50}ms` }} href="#">
    <div className="relative z-10">
      <Icon size={24} />
    </div>
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {name}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
    </div>
  </a>
));

const Contact = memo(() => {
  const { isInView, ref: sectionRef } = useScrollAnimation({ threshold: 0.1 });
  const contactInfo = [
    { icon: Mail, title: "Email", value: "hello@portfolio.com", description: "Drop me a line anytime", gradient: "from-blue-500 to-cyan-500" },
    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", description: "Mon-Fri 9am-6pm PST", gradient: "from-purple-500 to-pink-500" },
    { icon: MapPin, title: "Location", value: "San Francisco, CA", description: "Available worldwide remotely", gradient: "from-green-500 to-emerald-500" }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
    { icon: Linkedin, name: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
    { icon: Twitter, name: 'Twitter', gradient: 'from-sky-500 to-blue-600' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-orange-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_forwards]" />
          </div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`space-y-8 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{transitionDelay: '200ms'}}>
            <div className="space-y-6">
              {contactInfo.map((c, idx) => <ContactCard key={idx} {...c} isInView={isInView} index={idx} />)}
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((s, idx) => <SocialLink key={idx} {...s} isInView={isInView} index={idx} />)}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{transitionDelay: '400ms'}}>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Let's Work Together</h3>
                <p className="text-gray-400">Tell me about your project and let's create something amazing</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['First Name', 'Last Name'].map((label, i) => (
                    <div key={i} className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2">{label} *</label>
                      <input type="text" placeholder={label === 'First Name' ? "John" : "Doe"} className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50" />
                    </div>
                  ))}
                </div>

                {['Email Address', 'Subject'].map((label, i) => (
                  <div key={i} className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{label} *</label>
                    <input type={label === 'Email Address' ? 'email' : 'text'} placeholder={label === 'Email Address' ? 'john@example.com' : 'Project Discussion'} className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50" />
                  </div>
                ))}

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea rows={5} placeholder="Tell me about your project, timeline, budget, and any specific requirements..." className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 resize-none group-hover:border-gray-500/50" />
                </div>

                <button type="button" className="group w-full relative py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </span>
                </button>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
