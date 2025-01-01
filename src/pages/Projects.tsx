import { projects } from '../data/projects';
import { ProjectsGrid } from '../components/ProjectsGrid';

export const Projects = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectsGrid projects={ projects }></ProjectsGrid>
    </div>
  );
};
