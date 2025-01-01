import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 mt-8">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a target="_blank" href="https://www.linkedin.com/in/alex-cabrera-4bb46b58/" className="block text-gray-600 hover:text-primary">LinkedIn</a>
              <a target="_blank" href="mailto:uy.acabrera@gmail.com" className="block text-gray-600 hover:text-primary">Email</a>
              <a target="_blank" href="https://github.com/uy-acabrera" className="block text-gray-600 hover:text-primary">GitHub</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-primary">Home</Link>
              <Link to="/about" className="block text-gray-600 hover:text-primary">About</Link>
              <Link to="/projects" className="block text-gray-600 hover:text-primary">Projects</Link>
              <Link to="/blog" className="block text-gray-600 hover:text-primary">Blog</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-primary">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Email: uy.acabrera@gmail.com</p>
              <p className="text-gray-600">Location: Montevideo, Uruguay</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} Alex Cabrera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};