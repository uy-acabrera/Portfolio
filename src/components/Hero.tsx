import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("./assets/landing.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Hi, I'm Alex Cabrera
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>
        <div className="space-x-4">
          <Link to="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};