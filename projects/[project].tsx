import { useRouter } from 'next/router';
import { NextPage } from 'next';

type ProjectDetails = {
  title: string;
  description: string;
  link: string;
};

const projects: Record<string, ProjectDetails> = {
  'project-1': {
    title: 'BeanBot',
    description: 'Discord bot that deepfries images searched from the internet',
    link: 'https://github.com/b-hairston/BeanBot',
  },
  'project-2': {
    title: 'Kakfa MongoDB',
    description: 'A simple Kafka producer & consumer written in Java',
    link: 'https://github.com/b-hairston/kafka-mongo-stack',
  },
};

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const projectDetails = projects[project as string];

  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{projectDetails.title}</h1>
      <p>{projectDetails.description}</p>
      <a href={projectDetails.link}>View on GitHub</a>
    </div>
  );
};

export default ProjectPage;
