import type { Paper } from "@/data/papers";
import { paperTypeLabels } from "@/data/papers";

type Props = {
  paper: Paper;
  compact?: boolean;
};

export function PaperCard({ paper, compact = false }: Props) {
  const primaryLink = paper.links.pdf || paper.links.doi || paper.links.arxiv;

  return (
    <article className="rounded-lg bg-card border p-4 flex flex-col gap-3 hover:shadow transition-all">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
              {paperTypeLabels[paper.type]}
            </span>
            {paper.institution && (
              <span className="text-xs text-muted-foreground">
                {paper.institution}
              </span>
            )}
          </div>
          <h3 className="font-medium mt-2 text-base">{paper.title}</h3>
        </div>
      </div>

      <time className="text-xs text-muted-foreground">{paper.date}</time>

      {!compact && (
        <p className="text-sm text-muted-foreground line-clamp-3">
          {paper.abstract}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {paper.tags.slice(0, compact ? 3 : 5).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] bg-white/10 dark:bg-white/5"
          >
            {tag}
          </span>
        ))}
        {paper.tags.length > (compact ? 3 : 5) && (
          <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] bg-white/10 dark:bg-white/5">
            +{paper.tags.length - (compact ? 3 : 5)}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 pt-2 border-t">
        {paper.links.pdf && (
          <a
            href={paper.links.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
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
            </svg>
            Read PDF
          </a>
        )}
        {paper.links.doi && (
          <a
            href={paper.links.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
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
            DOI
          </a>
        )}
        {paper.links.arxiv && (
          <a
            href={paper.links.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
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
            arXiv
          </a>
        )}
        {paper.links.presentation && (
          <a
            href={paper.links.presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
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
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
            Slides
          </a>
        )}
      </div>

      {/* Co-authors */}
      {paper.coAuthors && paper.coAuthors.length > 0 && !compact && (
        <p className="text-xs text-muted-foreground">
          Co-authors: {paper.coAuthors.join(", ")}
        </p>
      )}
    </article>
  );
}

export default PaperCard;
