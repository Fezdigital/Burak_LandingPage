'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ProjectForm } from '@/components/admin/ProjectForm';

export default function NewProjectPage() {
  const [user, setUser] = useState<{ username: string; isAdmin: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
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
            <h1 className="text-3xl font-bold text-white mb-2">Add New Project</h1>
            <p className="text-gray-400">Create a new project for your portfolio</p>
          </div>

          {/* Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <ProjectForm />
          </div>
        </div>
      </div>
    </div>
  );
}

