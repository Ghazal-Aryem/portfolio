'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FiAward, FiCode, FiUsers, FiCoffee, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

const About = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'FastAPI/Flask', level: 75 },
    { name: 'MongoDB/MySQL', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'AWS S3', level: 70 },
  ];

  const stats = [
    { icon: FiAward, number: '3.25/4.00', text: 'CGPA at NUML' },
    { icon: FiCode, number: '5+', text: 'Projects Completed' },
    { icon: FiUsers, number: '1', text: 'Professional Experiences' },
    { icon: FiCoffee, number: '4', text: 'Certifications' },
  ];

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+92-333-5575068',
      link: 'tel:+923335575068'
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'ghazalmariem911@gmail.com',
      link: 'mailto:ghazalmariem911@gmail.com'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Sadiqabad, Rawalpindi, Pakistan',
      link: '#'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header with Profile Picture */}
          <div className="text-center mb-16 animate-fade-in">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="relative w-44 h-44 mx-auto mt-2 rounded-full overflow-hidden border-4 border-gray-900">
                <Image
                  src="/profile.png" 
                  alt="Ghazal Aryem"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image doesn&apos;t exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if no image */}
                <div 
                  className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white text-4xl font-bold"
                >
                  GA
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate Computer Science Graduate specializing in Full Stack Development and Machine Learning
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.text}
                className="glass-effect p-6 rounded-2xl text-center animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.text}</div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-6 animate-slide-up">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                    >
                      <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                        <info.icon className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{info.title}</h4>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-3xl font-bold mb-6 text-white">My Journey</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I&apos;m Ghazal Aryem, a Computer Science graduate from National University of Modern Languages 
                    with a CGPA of 3.25/4.00. My passion lies in creating innovative solutions through full-stack 
                    development and machine learning.
                  </p>
                  <p>
                    With experience in both industry and academic projects, I&apos;ve developed expertise in Python, 
                    React/Next.js, FastAPI, and various machine learning frameworks. I enjoy turning complex 
                    problems into elegant, scalable solutions.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to projects, 
                    or continuously learning to enhance my skills in this ever-evolving field.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Technical Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                          onMouseEnter={(e) => {
                            e.target.style.width = `${skill.level}%`;
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills & Education */}
              <div className="space-y-6">
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Teamwork', 'Effective Communication', 'Growth Mindset', 'Keenness to learn'].map((skill, index) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Bachelor&apos;s in Computer Science</h4>
                    <p className="text-blue-400">National University of Modern Languages</p>
                    <p className="text-gray-300">2021 – 2025 | CGPA: 3.25/4.00</p>
                    <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;