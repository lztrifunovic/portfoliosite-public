import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  webpImage: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  webpImage, 
  tags, 
  githubUrl, 
  liveUrl, 
  index 
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 will-change-transform">
      <div className="h-48 overflow-hidden">
        <picture>
          <source srcSet={webpImage} type="image/webp" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            width="400"
            height="250"
          />
        </picture>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;