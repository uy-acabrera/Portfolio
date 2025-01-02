import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Button } from '../components/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { YoutubeEmbed } from '../components/YoutubeEmbed';
import { IMAGES } from '../data/images';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/projects">
          <Button>
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link to="/projects" className="inline-block mb-8">
        <Button>
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Button>
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div
          className="h-64 bg-gray-200 dark:bg-gray-700 w-full aspect-square rounded-lg bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: project.previewImageLarge ?
              `url("${IMAGES.PROJECTS}/${project.id}/images/${project.previewImageLarge}")` : 
              `url("${IMAGES.PROJECTS}/default.jpg")`,
          }}
        ></div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {project.fullDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Images Section */}
          {
            project.images && project.images.length > 0 &&
            <div className="mb-4">
              {
                project.images?.map((image) => (
                  <img className="mb-2" src={ `${IMAGES.PROJECTS}/${project.id}/images/${image}` } />
                ))
              }
            </div>
          }

          {/* Videos Section */}
          {
            project.videos && project.videos.length > 0 &&
            <div className="mb-4">
              {
                project.videos?.map((video) => (
                  <div className="mb-2">
                    <YoutubeEmbed embedId={ video }/>
                  </div>
                ))
              }
            </div>

          }

          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View on GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};