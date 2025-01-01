import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const posts = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    date: '2024-03-15',
    summary: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with Tailwind CSS',
    date: '2024-03-10',
    summary: 'A comprehensive guide to creating responsive layouts using Tailwind CSS utility classes.',
  },
  {
    id: 3,
    title: 'State Management in React Applications',
    date: '2024-03-05',
    summary: 'Exploring different state management solutions in React and when to use them.',
  },
  // Add more blog posts as needed
];

export const Blog = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-4">{post.date}</p>
            <p className="text-gray-600 dark:text-gray-200 mb-4">{post.summary}</p>
            <Link to={`/blog/${post.id}`}>
              <Button>Read More</Button>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};