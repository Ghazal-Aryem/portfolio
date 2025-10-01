'use client';
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl glass-effect animate-slide-up hover:scale-105 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-90 overflow-hidden">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
            <div className="text-4xl">🚀</div>
          </div>
        )}
        
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={project.githubUrl} target='_blank' rel='noreferrer'
            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform duration-300"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href={project.liveUrl} target='_blank' rel='noreferrer'
            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform duration-300"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              style={{ animationDelay: `${techIndex * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;