import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const posts = [
  {
    id: 1,
    title: 'Why "Angular vs React" is the Wrong Question',
    date: '2025-01-02',
    summary: 'The debate over Angular vs React is one of the most discussed topics in web development.',
    link: 'https://medium.com/@uy.acabrera/why-angular-vs-react-is-the-wrong-question-c2797eaa7696',
  },
  {
    id: 2,
    title: 'How to Finally Understand Generics in TypeScript',
    date: '2019-05-20',
    summary: 'Let\'s demystify that weird <T> syntax and make it our friend instead of our enemy.',
    link: 'https://medium.com/better-programming/typescript-generics-90be93d8c292',
  },
  {
    id: 3,
    title: 'New Features in TypeScript You Didn\'t Know Exist',
    date: '2019-06-10',
    summary: 'A quick overview of the most exciting new features in TypeScript 3 that you might have missed!',
    link: 'https://medium.com/bitsrc/new-features-in-typescript-you-didnt-know-exist-54b7ab8d0b4f',
  },
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
            <Link to={`${post.link}`} target="_blank">
              <Button>Read More</Button>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};