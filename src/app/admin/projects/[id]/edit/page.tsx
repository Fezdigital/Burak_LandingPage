'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ProjectForm } from '@/components/admin/ProjectForm';
import { Project } from '@/types/project';

export default function EditProjectPage() {
  const [user, setUser] = useState<{ username: string; isAdmin: boolean } | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  useEffect(() => {
    checkAuth();
    if (id) {
      loadProject(id);
    }
  }, [id]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    }
  };

  const loadProject = async (projectId: string) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else if (response.status === 404) {
        setError('Project not found');
      } else {
        setError('Failed to load project');
      }
    } catch (error) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-950 flex">
        <AdminSidebar user={user} />
        
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold text-red-300 mb-2">Error</h2>
              <p className="text-red-300/80 mb-4">{error}</p>
              <button
                onClick={() => router.push('/admin/projects')}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <AdminSidebar user={user} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Edit Project</h1>
            <p className="text-gray-400">Update your project details</p>
          </div>

          {/* Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <ProjectForm project={project} isEditing={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

