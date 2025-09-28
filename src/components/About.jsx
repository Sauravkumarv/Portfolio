import React, { memo, useCallback } from 'react';
import { Code, Globe, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Memoized components for better performance
const StatCard = memo(function StatCard({ number, label, description, isInView }) {
  return (
    <article 
      className={`text-center space-y-2 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      role="article"
      aria-labelledby={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="text-3xl font-bold text-white" aria-label={`${number} ${label}`}>{number}</div>
      <div id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`} className="text-sm font-medium text-gray-300">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </article>
  );
});

const SkillItem = memo(function SkillItem({ label, level, isInView, index }) {
  return (
    <div 
      className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-blue-500/30 hover:scale-102 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-500 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      role="listitem"
      aria-label={`${label} - ${level} level`}
    >
      <div className="flex items-center space-x-3">
        <CheckCircle size={16} className="text-green-400" aria-hidden="true" />
        <span className="text-gray-300">{label}</span>
      </div>
      <div className="text-right">
        <span className="text-sm text-blue-400 font-medium">{level}</span>
      </div>
    </div>
  );
});

const ApproachCard = memo(function ApproachCard({ title, description, icon, isInView, index }) {
  return (
    <article 
      className={`p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      role="article"
    >
      <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </article>
  );
});

// Skills data for better maintainability
const SKILLS_DATA = [
  { label: 'React ', level: 'Expert' },
  { label: 'Node.js & Express', level: 'Advanced' },
  { label: 'TypeScript', level: 'Beginner' },
  { label: 'Database Design', level: 'Advanced' },
  { label: 'JAVA', level: 'Expert' },
  
];

const APPROACH_DATA = [
  {
    title: 'Strategy First',
    description: 'Understanding business goals before writing the first line of code',
    icon: '🎯'
  },
  {
    title: 'User-Centric',
    description: 'Every decision is made with the end user experience in mind',
    icon: '👥'
  },
  {
    title: 'Future-Proof',
    description: 'Building scalable solutions that grow with your business',
    icon: '📈'
  }
];

const STATS_DATA = [
  { number: '5+', label: 'Projects', description: 'Delivered successfully' },
  { number: '1+', label: 'Years', description: 'Of experience' },
  { number: '98%', label: 'Satisfaction', description: 'Client rating' },
  { number: '24/7', label: 'Support', description: 'Communication' }
];

const TECHNOLOGIES = ['React',  'Node.js', 'Express','TypeScript','JAVA','My Sql', 'Oracle', 'MOngo DB','Docker','Postman','Vercel/Netify','Railway/Render'];

const About = ({scrollToSection}) => {
  const { isInView, ref: sectionRef } = useScrollAnimation({ threshold: 0.1 });

  // ✅ Memoize click handler
  const handleWork = useCallback(() => {
    scrollToSection('contact');
  }, [scrollToSection]);



  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      aria-labelledby="about-heading"
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      {/* Optimized Background Elements - using will-change for better performance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl will-change-transform" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* SEO Optimized Header */}
        <header className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <h1 
  id="about-heading"
  className="text-4xl md:text-6xl font-bold mb-6 text-white"
  itemProp="name"
  style={{ lineHeight: '1.2' }} 
>
  <span className={`inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-black transition-all duration-1000 ${
    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`} style={{transitionDelay: '200ms'}}>
    Building Digital
  </span>
  &nbsp; {/* space add karne ke liye */}
  <span 
    className={`inline-block bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-black transition-all duration-1000 ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{transitionDelay: '400ms'}}
  >
    Experiences
  </span>
</h1>
{/* <p
  className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide"
  itemProp="description"
>
  I'm a passionate full-stack developer focused on creating scalable, 
  user-centric solutions that drive business growth and deliver exceptional experiences.
</p> */}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <main className={`lg:col-span-8 space-y-8 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{transitionDelay: '600ms'}}>
            {/* Bio Section with structured data */}
            <section aria-labelledby="bio-heading" itemScope itemType="https://schema.org/Person">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6" itemProp="description">
                  With over 1 years of experience in full-stack development, I specialize in building 
                  modern web applications using cutting-edge technologies. My approach combines technical 
                  expertise with strategic thinking to deliver solutions that not only work flawlessly 
                  but also drive meaningful business outcomes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of clean, maintainable code and user-centered design. 
                  My experience spans from startup environments to enterprise-level projects, 
                  giving me unique insights into scalability, performance, and user experience optimization.
                </p>
              </div>
            </section>

            {/* Skills Section with semantic markup */}
            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code size={24} className="text-blue-400 mr-3" aria-hidden="true" />
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                {SKILLS_DATA.map((skill, index) => (
                  <SkillItem 
                    key={skill.label} 
                    label={skill.label} 
                    level={skill.level}
                    isInView={isInView}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Approach Section */}
            <section aria-labelledby="approach-heading">
              <h2 id="approach-heading" className="text-2xl font-bold text-white mb-6">
                My Development Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {APPROACH_DATA.map((item, index) => (
                  <ApproachCard 
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    isInView={isInView}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={`lg:col-span-4 space-y-8 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{transitionDelay: '800ms'}} aria-label="Developer information">
            {/* Profile Card with Person schema */}
            <section itemScope itemType="https://schema.org/Person">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:from-white/15 hover:to-white/10 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xl font-bold text-white"
                    role="img"
                    aria-label="John Doe's profile image"
                  >
                    JD
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" itemProp="name">Saurav Kumar Verma</h3>
                    <p className="text-blue-400 font-medium" itemProp="jobTitle"> Full-Stack Developer</p>
                    <p className="text-sm text-gray-400 mt-1" itemProp="address">Delhi, India</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe size={16} className="mr-2 text-gray-400" aria-hidden="true" />
                    <span>Available for remote work</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="mr-2 text-green-400" aria-hidden="true" />
                    <span>Currently accepting projects</span>
                  </div>
                </div>

                <button onClick={handleWork}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  type="button"
                  aria-label="Contact John Doe to work together"
                >
                  Let's Work Together
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </section>

            {/* Stats Section */}
            <section aria-labelledby="stats-heading">
              <h3 id="stats-heading" className="sr-only">Professional Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {STATS_DATA.map((stat, index) => (
                  <StatCard 
                    key={stat.label}
                    number={stat.number} 
                    label={stat.label} 
                    description={stat.description}
                    isInView={isInView}
                  />
                ))}
              </div>
            </section>

            {/* Technologies Section with improved semantics */}
            <section aria-labelledby="tech-heading">
              <h3 id="tech-heading" className="text-lg font-semibold text-white mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Technology stack">
                {TECHNOLOGIES.map((tech, index) => (
                  <span 
                    key={tech} 
                    className={`px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-gray-300 hover:bg-white/20 hover:border-blue-500/40 hover:text-white hover:scale-105 transition-all duration-500 cursor-default ${
                      isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    role="listitem"
                    itemProp="knowsAbout"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

// Display name for better debugging
About.displayName = 'About';

export default memo(About);