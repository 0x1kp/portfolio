import type { Disclosure } from "@/data/disclosures";
import { severityColors } from "@/data/disclosures";

type Props = {
  disclosure: Disclosure;
  compact?: boolean;
};

export function DisclosureCard({ disclosure, compact = false }: Props) {
  const severityClass = severityColors[disclosure.severity];

  return (
    <article className="rounded-lg bg-card border p-4 flex flex-col gap-3 hover:shadow transition-all">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {disclosure.cve && (
              <span className="text-xs font-mono bg-primary/10 px-2 py-0.5 rounded">
                {disclosure.cve}
              </span>
            )}
            <span
              className={`text-xs px-2 py-0.5 rounded border capitalize ${severityClass}`}
            >
              {disclosure.severity}
            </span>
            {disclosure.status === "pending" && (
              <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/30">
                Pending Disclosure
              </span>
            )}
          </div>
          <h3 className="font-medium mt-2 text-base">{disclosure.title}</h3>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>Vendor: {disclosure.vendor}</span>
        <span>{disclosure.date}</span>
        {disclosure.reward && <span>Reward: {disclosure.reward}</span>}
      </div>

      {!compact && (
        <p className="text-sm text-muted-foreground">{disclosure.description}</p>
      )}

      {/* Links */}
      {(disclosure.links.writeup ||
        disclosure.links.advisory ||
        disclosure.links.cveLink) && (
        <div className="flex flex-wrap gap-3 pt-2 border-t">
          {disclosure.links.writeup && (
            <a
              href={disclosure.links.writeup}
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
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
              </svg>
              Write-up
            </a>
          )}
          {disclosure.links.advisory && (
            <a
              href={disclosure.links.advisory}
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              Vendor Advisory
            </a>
          )}
          {disclosure.links.cveLink && (
            <a
              href={disclosure.links.cveLink}
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
              CVE Details
            </a>
          )}
        </div>
      )}

      {/* Pending notice */}
      {disclosure.status === "pending" &&
        !disclosure.links.writeup &&
        !compact && (
          <p className="text-xs text-muted-foreground italic">
            Full writeup pending vendor approval.
          </p>
        )}
    </article>
  );
}

export default DisclosureCard;
