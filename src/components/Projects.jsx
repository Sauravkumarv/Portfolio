import React, { useState } from 'react';
import { Eye, ExternalLink, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// projects array component ke bahar define kiya
const projects = [
  {
    title: "URL Management & Click Analytics",
    description:
      "A full-stack URL shortener app that transforms long URLs into short, shareable links. Built with React for the frontend and Node.js/Express for the backend, it stores URLs and visit history in a database. Users can create, manage, copy short URLs, and view detailed click analytics—all with a clean, interactive interface.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/url-shortener.png",
    liveUrl: "https://mern-url-shortner-ar36.vercel.app/",
    gitCode:"https://github.com/Sauravkumarv/ReceiptGenerator"
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blog platform developed using Node.js, Express.js, MongoDB, and EJS. This application enables users to register and manage accounts, create and publish blog posts with cover images, and engage with content through a commenting system. The project emphasizes robust backend functionality, intuitive user experience, and efficient data management",
    tech: ["React", "Node.js", "MongoDB", "EJS", "Rest Api", "JWT"],
    gradient: "from-purple-500 to-pink-500",
    image: "/images/blog.png",
    liveUrl: "https://blogify-com-u3lq.onrender.com/",
    gitCode:"https://github.com/Sauravkumarv/blogify.com"

  },
  {
    title: "Vectorshift-Pipeline-Builder",
    description:
      "VectorShiftBuilder is an interactive frontend application designed to visually create and manage data processing pipelines. Users can drag and drop different types of nodes—such as input sources, outputs, text processors, and LLM modules—to build custom workflows. Each node represents a specific operation or function, allowing users to connect them logically to define data flow. The app focuses on ease of use, visual clarity, and modularity, making complex pipeline construction intuitive without needing backend logic.",
    tech: ["HTML", "CSS", "React"],
    gradient: "from-orange-500 to-red-500",
    image: "/images/Vectorshift-Pipeline-Builder.png",
    liveUrl: "https://vectorshift-pipeline-builder-387765ew3-sauravkumarvs-projects.vercel.app/",
    gitCode:"https://github.com/Sauravkumarv/Vectorshift-Pipeline-Builder"

  },
  {
    title: "Library Management System",
    description:
      "Developed a Spring Boot application using JdbcTemplate and MySQL to implement full CRUD operations for managing books, authors, and library resources efficiently and reliably.",
    tech: ["JAVA", "Spring-Boot", "JDBC", "MySQL"],
    gradient: "from-yellow-500 to-orange-500",
    image: "/images/library.png",
    liveUrl: "https://mern-url-shortner-ar36.vercel.app/",
    gitCode:"https://github.com/Sauravkumarv/springboot-library-crud"

  }
  ,
  {
    title: "Secure Stripe Payment Gateway Integration",
    description:
      "Integrated Stripe payment gateway to build a secure and modern payment processing solution using Node.js and Express. Developed an intuitive, responsive interface with interactive success and cancellation pages, ensuring seamless user experience and reliable transaction handling",
    tech: ["Node.js", "Express.js", "Stripe API", "EJS"],
    gradient: "from-indigo-500 to-purple-500",
    image: "/images/stripe.png",
    liveUrl: "https://stripepayment-pitx.onrender.com/",
    gitCode:"https://github.com/Sauravkumarv/StripePayment"

  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive web application developed with HTML, CSS, and JavaScript, leveraging the OpenWeatherMap API to fetch real-time weather data. Users can search for any city to instantly view temperature, humidity, wind speed, and current weather conditions, complemented by dynamic, visually intuitive icons for an enhanced user experience.",
    tech: ["HTML", "CSS", "Javascript", "API"],
    gradient: "from-green-500 to-teal-500",
    image: "/images/weather.png",
    liveUrl: "https://weather-app-ayku-g8x3pok3q-sauravkumarvs-projects.vercel.app/",
    gitCode:"https://github.com/Sauravkumarv/Weather-App"

  },
  
  {
    title: "Responsive Tip Calculator",
    description:
      "Developed a stylish and responsive tip calculator using HTML, CSS, and JavaScript. Implemented a glassmorphism design with smooth animations and interactive components, providing users with a seamless and visually appealing experience across devices.",
    tech: ["HTML", "CSS", "Javascript"],
    gradient: "from-orange-500 to-red-500",
    image: "/images/tip.png",
    liveUrl: "https://calculate-tip-ten.vercel.app/",
    gitCode:"https://github.com/Sauravkumarv/calculate_tip"

  },
  
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const { isInView, ref: sectionRef } = useScrollAnimation({ threshold: 0.1 });

  // Function to open modal with image
  const handleOpenModal = (imageSrc) => {
    console.log("Opening modal with image:", imageSrc);
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setCurrentImage("");
  };

  // Function to open live URL
  const handleOpenLiveUrl = (url) => {
    console.log("Opening live URL:", url);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("No URL provided");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section id="projects" ref={sectionRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ">
                  Featured Projects
                </span>
              </h2>
              {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_forwards]" /> */}
            </div>
            <p className="text-xl text-gray-400 mt-0 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/20 flex flex-col ${
                  isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Icon Area */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Project Image */}
                  <img
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full rounded-3xl"
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully:', project.image)}
                  />
                  
                  {/* Fallback Icon
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-80">
                    {project.title.includes('URL') ? '🔗' : 
                     project.title.includes('Blog') ? '📝' :
                     project.title.includes('Weather') ? '🌤️' :
                     project.title.includes('Stripe') ? '💳' :
                     project.title.includes('Library') ? '📚' :
                     project.title.includes('Tip') ? '💰' : '🚀'}
                  </div> */}

                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {/* Eye button to open modal */}
                      <button

                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenModal(project.image);
                        }}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 text-white border border-white/20 hover:border-white/40"
                        title="View Image"
                      >
                        <Eye size={20} />
                      </button>
                      
                      {/* External Link button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenLiveUrl(project.liveUrl);
                        }}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 text-white border border-white/20 hover:border-white/40"
                        title="Open Live Project"
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      Featured
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium border border-white/10 hover:border-blue-400/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleOpenLiveUrl(project.liveUrl);
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                    >
                      View Live
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleOpenLiveUrl(project.gitCode);
                      }}
                      className="flex-1 border border-white/20 hover:border-white/40 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-white/5 text-white"
                    >
                      View Code
                    </button>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="relative max-h-[90vh] max-w-[90vw] bg-gray-800 rounded-lg p-4">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors z-10"
                title="Close"
              >
                <X size={20} />
              </button>
              
              {/* Image or Fallback */}
              <div className="flex items-center justify-center min-h-[300px]">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt="Project preview"
                    className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
                    onError={(e) => {
                      console.error("Image failed to load:", currentImage);
                      e.target.style.display = 'none';
                    }}
                  />
                ) : null}
                
                {/* Fallback content */}
                {/* <div className="text-center text-gray-300">
                  <div className="w-64 h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-lg">Project Preview</span>
                  </div>
                  <p>Image preview not available</p>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;