"use client";

import 'styles/globals.css';
import ThemeToggle from 'components/theme-toggle';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const projects = {
  'project-1': {
    title: 'BeanBot',
    description: 'Discord bot that deepfries images searched from the internet',
    link: 'https://github.com/b-hairston/BeanBot',
  },
  'project-2': {
    title: 'Kafka MongoDB',
    description: 'A simple Kafka producer & consumer written in Java',
    link: 'https://github.com/b-hairston/kafka-mongo-stack',
  },
};

// Define a type for the valid project keys
type ProjectKey = keyof typeof projects;

const ProjectPage = () => {
  const params = useParams();

  if (!params || !params.project) {
    return <div>Project not found</div>;
  }

  const project = params.project as ProjectKey; // Cast to valid project keys

  const projectDetails = projects[project];

  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-gray-600 text-white py-4 flex items-center justify-between px-6">
        <Link href="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <div className="text-center flex-grow">
        </div>
        <ThemeToggle />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{projectDetails.title}</h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-800 dark:text-white">{projectDetails.description}</p>
          <Link
            href={projectDetails.link}
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;