import React, { useState } from "react";
import emailjs from "@emailjs/browser";


import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Send,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Contact = ({ scrollToSection }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "sauravkumarv22@gmail.com",
      description: "Drop me a line anytime",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      value: "+917428621418",
      description: "Mon-Fri 9am-6pm PST",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin size={28} />,
      title: "Location",
      value: "Delhi, India",
      description: "Available worldwide remotely",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      gradient: "from-gray-700 to-gray-900",
      url: "https://github.com/Sauravkumarv",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      gradient: "from-blue-600 to-blue-800",
      url: "https://www.linkedin.com/in/saurav-kumar-verma-6014a722b/",
    },
    {
      icon: <FaXTwitter size={24} />,
      name: "Twitter",
      gradient: "from-sky-500 to-blue-600",
      url: "https://x.com/SK_Verma22",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,  // matches {{name}}
        email: formData.email,                               // matches {{email}} agar template me hai
        subject: formData.subject || "No Subject",           // matches {{subject}}
        message: formData.message                            // matches {{message}}
      };

      await emailjs.send(
        "service_9j24bp6",     // replace with your EmailJS Service ID
        "template_wt49e0t",    // replace with your Template ID
        templateParams,
        "J1-vdDU1rzXDJu2pL"      // replace with your Public Key
      );

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.subject &&
    formData.message;

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-orange-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_forwards]" /> */}
          </div>
          <p className="text-xl text-gray-400 mt-0 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${contact.gradient
                      .replace("from-", "from-")
                      .replace("to-", "/10 to-")}/10`}
                  />

                  <div className="flex items-start space-x-4 relative z-10">
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${contact.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-300 font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-xor" />
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-r ${social.gradient} rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                  >
                    <div className="relative z-10">{social.icon}</div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {/* {social.name} */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-800/90 backdrop-blur-sm rounded-3xl border-2 border-green-500/50 flex items-center justify-center z-20">
                  <div className="text-center p-8">
                    <div className="mb-4">
                      <CheckCircle
                        size={64}
                        className="text-green-400 mx-auto animate-bounce"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-200 text-lg mb-2">
                      Thank you for reaching out!
                    </p>
                    <p className="text-green-300">
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Form Header */}
              <form onSubmit={handleSubmit}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-400">
                  Tell me about your project and let's create something amazing
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 group-hover:border-gray-500/50"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 resize-none group-hover:border-gray-500/50"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`group w-full relative py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform shadow-lg overflow-hidden ${
                    !isFormValid || isSubmitting
                      ? "bg-gray-600 cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          size={20}
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>
              </form>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;