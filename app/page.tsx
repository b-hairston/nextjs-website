"use client";

import '../styles/globals.css';
import Link from 'next/link';
import ThemeToggle from '../components/theme-toggle'; // Adjust path as necessary

const projects = [
  {
    slug: 'project-1',
    title: 'BeanBot',
    description: 'Discord bot that deepfries images searched from the internet',
  },
  {
    slug: 'project-2',
    title: 'Kafka MongoDB',
    description: 'A simple Kafka producer & consumer written in Java',
  },
  {
    slug: 'project-3',
    title: 'Rust Webserver',
    description: 'Learning rust via building a webserver',
  },

];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header with Theme Toggle */}
      <header className="bg-white-600 text-white py-4 flex items-center justify-between px-6">
        <div className="text-center flex-grow">
          {/* Optionally place logo or site name here */}
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="bg-white-600 text-white py-12 text-center">
        <h2 className="text-5xl text-black font-extrabold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-black mb-8">I’m a passionate data engineer with experience in various technologies. Explore my projects below.</p>
      </section>

      {/* Projects Section */}
      <main className="flex-grow p-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              <Link
                href={`/projects/${project.slug}`}
                className="text-2xl font-semibold text-black dark:text-white hover:underline dark:text-blue-400"
              >
                {project.title}
              </Link>
              <p className="text-lg mt-2 text-black dark:text-white">{project.description}</p>
            </li>
          ))}
        </ul>
      </main>

      {/* Resume Download Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Download My Resume</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-white">Click the button below to download my latest resume.</p>
        <a
          href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
          download
          className="button"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-600 text-white py-6 text-center">
        <div className="max-w-screen-md mx-auto px-4">
          <p>
            Want to get in touch?{' '}
            <a href="mailto:you@example.com" className="text-blue-400 hover:underline">
              Email me
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
