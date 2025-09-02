'use client';

import { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '@/types/project';
import { ProjectCard } from './project-card';

interface ProjectsGridProps {
  category?: ProjectCategory;
  featured?: boolean;
  limit?: number;
}

export function ProjectsGrid({ category, featured, limit }: ProjectsGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        
        if (category) {
          params.append('category', category);
        }
        
        if (featured) {
          params.append('featured', 'true');
        }

        const response = await fetch(`/api/projects?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        let data = await response.json();
        
        if (limit && data.length > limit) {
          data = data.slice(0, limit);
        }

        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [category, featured, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {Array.from({ length: limit || 6 }).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 lg:p-8 h-96 animate-pulse">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-700 rounded mb-3"></div>
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-700 rounded mb-4"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Error Loading Projects</h3>
        <p className="text-white/60">{error}</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-white/40 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
        <p className="text-white/60">
          {category ? `No projects found in the ${category.toLowerCase().replace('_', ' ')} category.` : 'No projects available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

