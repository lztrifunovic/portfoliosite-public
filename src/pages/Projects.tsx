
import Navigation from '../components/Navigation';
import { ExternalLink, Github } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Lazy load project card component for better code splitting
const ProjectCard = lazy(() => import('../components/ProjectCard'));

const Projects = () => {
  // Optimized image URLs with smaller sizes and WebP format for better compression
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode support, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format&q=80",
      webpImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format&fm=webp&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: window.location.origin
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of technical solutions I've architected and developed, 
                spanning from AI-powered analytics to real-time systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Suspense fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-pulse">
                      <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
                        <div className="flex gap-2 mb-4">
                          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-16"></div>
                          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"></div>
                        </div>
                        <div className="flex gap-3">
                          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
                          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    webpImage={project.webpImage}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    index={index}
                  />
                ))}
                
                {/* Coming Soon Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 hover:shadow-2xl transition-shadow duration-300 will-change-transform">
                  <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 flex items-center justify-center">
                    <div className="text-6xl opacity-30">🚀</div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-3">
                      More Coming Soon
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      Exciting new projects are in development. Stay tuned for innovative solutions and cutting-edge technologies.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        In Progress
                      </span>
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        Watch this space for updates
                      </div>
                    </div>
                  </div>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
