import { papers, getAllPaperTypes, paperTypeLabels } from "@/data/papers";
import { PaperCard } from "@/components/PaperCard";

export const metadata = {
  title: "Papers & Research | David Ukeje",
  description:
    "Academic papers, research publications, and whitepapers on cybersecurity, cloud security, and cryptography by David Ukeje.",
};

export default function PapersPage() {
  const paperTypes = getAllPaperTypes();

  // Group papers by type
  const papersByType = paperTypes.reduce(
    (acc, type) => {
      acc[type] = papers.filter((p) => p.type === type);
      return acc;
    },
    {} as Record<string, typeof papers>
  );

  return (
    <main className="flex flex-col space-y-12">
      {/* Hero */}
      <section id="papers-hero" aria-labelledby="papers-title">
        <div className="w-full space-y-4">
          <h1
            id="papers-title"
            className="text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Papers & Research
          </h1>
          <p className="max-w-[600px] md:text-xl text-muted-foreground">
            Academic writings, research publications, and technical whitepapers
            on security, cloud infrastructure, and cryptography.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold">{papers.length}</div>
          <div className="text-xs text-muted-foreground">Total Papers</div>
        </div>
        {paperTypes.map((type) => (
          <div key={type} className="rounded-lg bg-card border p-4 text-center">
            <div className="text-2xl font-bold">{papersByType[type].length}</div>
            <div className="text-xs text-muted-foreground">
              {paperTypeLabels[type]}s
            </div>
          </div>
        ))}
      </section>

      {/* All Papers */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            All Publications
          </h2>
          <p className="text-sm text-muted-foreground">
            Research and academic work in cybersecurity and related fields.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {papers.map((paper) => (
            <PaperCard key={paper.slug} paper={paper} />
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="rounded-lg bg-card border p-6 space-y-4">
        <h3 className="font-medium text-lg">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Cloud Security",
            "Threat Hunting",
            "Machine Learning in Security",
            "Post-Quantum Cryptography",
            "Detection Engineering",
            "Incident Response",
            "IAM Security",
            "SIEM Architecture",
          ].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 rounded-full bg-primary/10 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 space-y-4">
        <p className="text-muted-foreground">
          Interested in collaborating on research?
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ukejeeee@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:shadow transition-all text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/ukeje-u-9ab588109/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:shadow transition-all text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
