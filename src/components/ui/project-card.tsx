'use client';

import { useState } from 'react';
import { Project } from '@/types/project';
import Link from 'next/link';
import { ImageModal } from './image-modal';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-[0.80] rounded-xl sm:rounded-2xl blur-3xl" />
        <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 lg:p-10 h-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col">
          <div className="flex-1">
            {/* Project Image */}
            {project.imageUrl && (
              <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Project Title */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-50">
              {project.title}
            </h3>

            {/* Project Short Description */}
            <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-3 leading-relaxed relative z-50 font-semibold">
              {project.description}
            </p>

            {/* Project Detailed Description */}
            {project.longDescription && (
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed relative z-50">
                {project.longDescription}
              </p>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 sm:gap-2 relative z-50 mb-4 sm:mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Fixed to bottom */}
          <div className="flex gap-2 relative z-50 mt-auto">
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" className="flex-1">
                <button className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 text-sm font-medium rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  Live Demo
                </button>
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" className="flex-1">
                <button className="w-full px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 hover:text-gray-200 text-sm font-medium rounded-lg border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300">
                  GitHub
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {project.imageUrl && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={project.imageUrl}
          imageAlt={project.title}
        />
      )}
    </>
  );
}

