'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight , FiDownload } from 'react-icons/fi';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Python Developer', 'Problem Solver'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mb-15">
        <div className="animate-fade-in mt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Ghazal Aryem</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-light mb-8 h-12">
            I'm a <span className="gradient-text font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Computer Science Graduate passionate about Full Stack Development, Machine Learning, 
            and creating innovative digital solutions that make an impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link 
              href="/projects" 
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View My Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a 
            href="/GHAZAL_RESUME_9.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
            View My CV
            <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a 
              href="/contact" 
              className="group glass-effect text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 ">
            {[
              { icon: FiGithub, href: 'https://github.com/Ghazal-Aryem', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ghazal-aryem-203a03255/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:ghazalmariem911@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="group p-3 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-9 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full  animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;