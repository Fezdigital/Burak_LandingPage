'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project, ProjectCategory, CreateProjectData } from '@/types/project';

interface ProjectFormProps {
  project?: Project;
  isEditing?: boolean;
}

export function ProjectForm({ project, isEditing = false }: ProjectFormProps) {
  const [formData, setFormData] = useState<CreateProjectData>({
    title: project?.title || '',
    description: project?.description || '',
    longDescription: project?.longDescription || '',
    imageUrl: project?.imageUrl || '',
    demoUrl: project?.demoUrl || '',
    githubUrl: project?.githubUrl || '',
    technologies: project?.technologies || [],
    category: project?.category || ProjectCategory.WEB_DEVELOPMENT,
    featured: project?.featured || false,
  });
  const [techInput, setTechInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = isEditing ? `/api/projects/${project!.id}` : '/api/projects';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/projects');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save project');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()],
      });
      setTechInput('');
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter(t => t !== tech),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTechnology();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ ...formData, imageUrl: data.url });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to upload image');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-white/80 mb-2">
            Project Title *
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-white/80 mb-2">
            Category *
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as ProjectCategory })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {Object.values(ProjectCategory).map((category) => (
              <option key={category} value={category}>
                {category.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
          Short Description *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Brief description of the project"
          rows={3}
          required
        />
      </div>

      {/* Long Description */}
      <div>
        <label htmlFor="longDescription" className="block text-sm font-medium text-white/80 mb-2">
          Detailed Description
        </label>
        <textarea
          id="longDescription"
          value={formData.longDescription}
          onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Detailed description of the project (optional)"
          rows={5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div>
          <label htmlFor="imageUpload" className="block text-sm font-medium text-white/80 mb-2">
            Project Image
          </label>
          <div className="space-y-3">
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            />
            {uploading && (
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
                Uploading image...
              </div>
            )}
            {formData.imageUrl && (
              <div className="mt-3">
                <img
                  src={formData.imageUrl}
                  alt="Project preview"
                  className="w-full h-32 object-cover rounded-lg border border-gray-600"
                />
                <p className="text-xs text-gray-400 mt-1">Current image</p>
              </div>
            )}
            {/* Manual URL input as fallback */}
            <div className="mt-3">
              <label htmlFor="imageUrl" className="block text-xs font-medium text-white/60 mb-1">
                Or paste image URL manually:
              </label>
              <input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800/30 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>

        {/* Demo URL */}
        <div>
          <label htmlFor="demoUrl" className="block text-sm font-medium text-white/80 mb-2">
            Demo URL
          </label>
          <input
            id="demoUrl"
            type="url"
            value={formData.demoUrl}
            onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://your-demo.com"
          />
        </div>
      </div>

      {/* GitHub URL */}
      <div>
        <label htmlFor="githubUrl" className="block text-sm font-medium text-white/80 mb-2">
          GitHub URL
        </label>
        <input
          id="githubUrl"
          type="url"
          value={formData.githubUrl}
          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://github.com/username/repository"
        />
      </div>

      {/* Technologies */}
      <div>
        <label htmlFor="technologies" className="block text-sm font-medium text-white/80 mb-2">
          Technologies Used
        </label>
        <div className="flex gap-2 mb-3">
          <input
            id="technologies"
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter technology (e.g., React, Node.js)"
          />
          <button
            type="button"
            onClick={addTechnology}
            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
        {formData.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTechnology(tech)}
                  className="hover:text-blue-200"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3">
        <input
          id="featured"
          type="checkbox"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          className="w-5 h-5 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="featured" className="text-sm font-medium text-white/80">
          Mark as featured project
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-4 pt-6 border-t border-gray-700">
        <button
          type="button"
          onClick={() => router.push('/admin/projects')}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-medium rounded-lg transition-colors"
        >
          {loading ? 'Saving...' : isEditing ? 'Update Project' : 'Create Project'}
        </button>
      </div>
    </form>
  );
}

