import type { Project } from "@/data/projects";
import Image from "next/image";

type Props = {
  project: Project;
  showDescription?: boolean;
};

export function ProjectCard({ project, showDescription = true }: Props) {
  // Determine primary link (for the card click)
  const primaryLink =
    project.links.github ||
    project.links.medium ||
    project.links.live ||
    project.links.writeup ||
    "#";

  // Check if this is a Medium article
  const isMediumArticle = !!project.links.medium && !project.links.github;

  return (
    <article className="rounded-lg bg-card flex flex-col overflow-hidden border hover:shadow transition-all group">
      <a className="block relative" href={primaryLink} target="_blank" rel="noopener noreferrer">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            alt={project.title}
            src={project.image}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          {/* Overlay for Medium articles */}
          {isMediumArticle && (
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                className="size-3"
                fill="currentColor"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Medium
            </div>
          )}
        </div>
      </a>

      <div className="px-3 py-2 flex-1 flex flex-col">
        <h3 className="font-medium mt-1 text-base line-clamp-2">
          {project.title}
        </h3>
        <time className="text-xs text-muted-foreground">
          {project.dateRange || project.date}
        </time>

        {showDescription && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] bg-white/10 dark:bg-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] bg-white/10 dark:bg-white/5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-3 pt-2 border-t flex flex-wrap gap-3">
          {project.links.github && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:underline"
              href={project.links.github}
              aria-label="View on GitHub"
            >
              <svg
                viewBox="0 0 438.549 438.549"
                className="size-3.5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995z"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.links.medium && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:underline"
              href={project.links.medium}
              aria-label="Read on Medium"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Read Article
            </a>
          )}
          {project.links.live && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:underline"
              href={project.links.live}
              aria-label="View live demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
          {project.links.writeup && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:underline"
              href={project.links.writeup}
              aria-label="Read writeup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              Write-up
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
