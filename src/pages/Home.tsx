import { Hero } from '../components/Hero';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { featureProjects } from '../data/projects';

export const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />

      {/* Featured Projects Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <ProjectsGrid projects={ featureProjects }></ProjectsGrid>
      </section>
    </div>
  );
};