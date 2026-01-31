import type { Certification } from "@/data/certifications";
import { categoryInfo } from "@/data/certifications";
import Image from "next/image";

type Props = {
  certification: Certification;
  compact?: boolean;
};

export function CertificationCard({ certification, compact = false }: Props) {
  const category = categoryInfo[certification.category];
  const hasLinks =
    certification.links.verify ||
    certification.links.credly ||
    certification.links.certificate;

  return (
    <article
      className={`rounded-lg bg-card border p-3 flex gap-3 hover:shadow transition-all ${
        compact ? "" : "flex-col sm:flex-row"
      }`}
    >
      {/* Logo */}
      <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border bg-white">
        <Image
          src={certification.issuerLogo}
          alt={certification.issuer}
          fill
          className="object-contain p-1"
          sizes="48px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-medium leading-tight text-sm truncate">
                {certification.name}
              </h3>
              {!compact && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded border ${category.color}`}
                >
                  {category.label}
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              {certification.issuer}
            </div>
          </div>
          <div className="text-xs tabular-nums text-muted-foreground shrink-0">
            {certification.date}
          </div>
        </div>

        {/* Full name if different */}
        {!compact && certification.fullName && certification.fullName !== certification.name && (
          <p className="text-xs text-muted-foreground mt-1">
            {certification.fullName}
          </p>
        )}

        {/* Credential ID */}
        {!compact && certification.credentialId && (
          <p className="text-xs text-muted-foreground mt-1">
            Credential ID: {certification.credentialId}
          </p>
        )}

        {/* Links */}
        {!compact && hasLinks && (
          <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t">
            {certification.links.verify && (
              <a
                href={certification.links.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Verify
              </a>
            )}
            {certification.links.credly && (
              <a
                href={certification.links.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                Credly
              </a>
            )}
            {certification.links.certificate && (
              <a
                href={certification.links.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Certificate
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default CertificationCard;
