'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Alisco-it",
      duration: "Sep 2025 – Present",
      location: "Islamabad, Pakistan",
      description: [
        "Solve the complex problems in both Web and Web App",
        "Use .Net and C# for backend and React.js/Next.js for frontend",
        
      ],
      technologies: [".NET", "C#", "React.js", "ASP.NET" , "VB.NET"]
    },
    {
      title: "Full Stack Intern",
      company: "Siber Koza-NASTP",
      duration: "May 2025 – jul 2025",
      location: "NASTP, Rawalpindi, Pakistan",
      description: [
        "Design and develop the e-commerce platform in both Web and Web App",
        "Created dynamic front-end pages and built robust backend systems",
        "Integrated database with backend and connected with Flask API",
        "Developed frontend in React Native and React.js/Next.js"
      ],
      technologies: ["React.js", "Next.js", "React Native", "Flask API", "Database Integration"]
    },
    {
      title: "Web & AI/ML Developer",
      company: "FYP Project - NUML",
      duration: "2023 – 2025",
      location: "Islamabad, Pakistan",
      description: [
        "Designed and developed backend APIs for AIRRR, an AI-powered resume recommendation tool",
        "Integrated Python, MongoDB, and AWS S3 for scalable and secure performance",
        "Built and validated 4–5 machine learning models for recommendation system",
        "Improved recommendation accuracy through rigorous testing on diverse datasets",
        "Developed dynamic frontend pages using React.js"
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "AWS S3", "Machine Learning", "React.js"]
    }
  ];

  const certificates = [
    {
      name: "Introduction to Programming using HTML and CSS",
      issuer: "Google",
      platform: "Coursera"
    },
    {
      name: "Programming with JavaScript",
      issuer: "Meta",
      platform: "Coursera"
    },
    {
      name: "Git/GitHub Foundation",
      issuer: "DataCamp",
      platform: "DataCamp"
    },
    {
      name: "Speaking English Professionally",
      issuer: "Coursera",
      platform: "Coursera"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience & <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and continuous learning path in technology
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-2xl p-8 animate-slide-up hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-xl text-blue-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiCalendar className="text-blue-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiMapPin className="text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 animate-fade-in"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-2xl p-6 animate-slide-up hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-blue-400">{cert.issuer}</p>
                    </div>
                    <FiExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{cert.platform}</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experience;