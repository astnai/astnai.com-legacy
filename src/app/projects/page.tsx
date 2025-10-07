import { Metadata } from 'next';
import { projects } from '@/data/projects';
import type { Project } from '@/lib/types/project';
import ExternalIcon from '@/components/icons/external-icon';

export const metadata: Metadata = {
  title: 'projects',
  description: "A collection of Agustín Arias's projects.",
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className='group'>
      <div className='flex items-center gap-1'>
        <a
          href={project.url}
          className='underline underline-offset-4 decoration-border hover:text-muted-foreground'
          target='_blank'
          rel='noopener noreferrer'
          tabIndex={0}
          aria-label={`Visit ${project.title} project`}
        >
          {project.title}
        </a>
        <span
          className='italic text-blue-500/60'
          aria-label={`Status: ${project.status}`}
        >
          ─ {project.status}
        </span>
      </div>
      <p className='mt-0.5 text-balance sm:max-w-[40ch] text-muted-foreground'>
        {project.description}
      </p>
    </article>
  );
};

export default function ProjectsPage() {
  return (
    <div>
      <div className='space-y-8'>
        <div className='space-y-8'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <div className='flex justify-end mt-12'>
        <a
          href='https://github.com/astnai'
          className='text-muted-foreground dark:text-muted-foreground hover:text-primary flex items-center gap-1'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='View more projects on GitHub'
        >
          more things on github
          <ExternalIcon className='w-4 h-4 align-middle' />
        </a>
      </div>
    </div>
  );
}
