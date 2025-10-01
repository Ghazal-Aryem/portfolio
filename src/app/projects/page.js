'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3legent E-Commerce Website',
      description: 'Developed a full-stack e-commerce platform using React/Next.js and Tailwind CSS, delivering a responsive, modern UI with seamless user experience. Integrated Flask-based RESTful APIs for authentication, product, and cart management.',
      technologies: ['Python', 'Flask API', 'Firebase', 'React.js', 'Next.js', 'Tailwindcss'],
      githubUrl: 'https://github.com/Ghazal-Aryem/3legent.git',
      liveUrl: 'https://github.com/Ghazal-Aryem/3legent/blob/main/README.md',
      category: 'fullstack',
       image: '/3legent.jpg'
    },
    {
      id: 2,
      title: 'AIRRR - AI Resume Recommendation',
      description: 'Built and deployed an end-to-end machine learning pipeline for predictive analytics, matching, and extraction. Designed comprehensive testing framework and evaluated multiple models using precision, recall, and F1-score.',
      technologies: ['Python', 'FAST API', 'MongoDB', 'Machine Learning', 'AWS S3', 'React.js'],
      githubUrl: 'https://github.com/Ghazal-Aryem/AIRRR.git',
      liveUrl: 'https://github.com/Ghazal-Aryem/AIRRR/blob/main/README.md',
      category: 'ml',
       image: '/AIRRR.jpg',
    },
    {
      id: 3,
      title: 'BookStore Management System',
      description: 'Developed a full-featured management system using .NET, C#, Bootstrap, and MVC to perform CRUD operations for books, authors, genres, and publishers.',
      technologies: ['.NET MVC', 'C#', 'SQL Server', 'Entity Framework', 'OOP', 'Bootstrap'],
      githubUrl: 'https://github.com/Ghazal-Aryem/BookStore_Management.git',
      liveUrl: 'https://github.com/Ghazal-Aryem/BookStore_Management/blob/main/README.md',
      category: 'web',
      image: '/BookStore.jpg',
    },
    {
      id: 4,
      title: 'Student Management Mobile App',
      description: 'Designed and developed a mobile application to perform full CRUD operations for student data, with Firebase integration for real-time storage and management.',
      technologies: ['Android Studio', 'Java', 'Volley API', 'Firebase'],
      githubUrl: 'https://github.com/Ghazal-Aryem/Student_Management.git',
      liveUrl: 'https://github.com/Ghazal-Aryem/Student_Management/blob/main/README.md',
      category: 'mobile',
     image: '/school.jpg',
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Machine Learning', value: 'ml' },
    { name: 'Web Development', value: 'web' },
    { name: 'Mobile', value: 'mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my work showcasing expertise in full-stack development, machine learning, and innovative solutions
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-300">Try selecting a different filter category</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;