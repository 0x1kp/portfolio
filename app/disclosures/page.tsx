import { disclosures, severityColors } from "@/data/disclosures";
import { DisclosureCard } from "@/components/DisclosureCard";

export const metadata = {
  title: "Security Disclosures | David Ukeje",
  description:
    "CVE disclosures, bug bounty findings, and security research by David Ukeje.",
};

export default function DisclosuresPage() {
  // Group by status
  const publishedDisclosures = disclosures.filter(
    (d) => d.status === "published"
  );
  const pendingDisclosures = disclosures.filter((d) => d.status === "pending");

  // Stats
  const stats = {
    total: disclosures.length,
    critical: disclosures.filter((d) => d.severity === "critical").length,
    high: disclosures.filter((d) => d.severity === "high").length,
    medium: disclosures.filter((d) => d.severity === "medium").length,
    low: disclosures.filter((d) => d.severity === "low").length,
    withReward: disclosures.filter(
      (d) => d.reward && d.reward !== "None" && d.reward !== "Pending"
    ).length,
  };

  return (
    <main className="flex flex-col space-y-12">
      {/* Hero */}
      <section id="disclosures-hero" aria-labelledby="disclosures-title">
        <div className="w-full space-y-4">
          <h1
            id="disclosures-title"
            className="text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Security Disclosures
          </h1>
          <p className="max-w-[600px] md:text-xl text-muted-foreground">
            CVE disclosures, bug bounty findings, and responsible disclosure
            reports.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-xs text-muted-foreground">Total Findings</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-red-400">
            {stats.critical + stats.high}
          </div>
          <div className="text-xs text-muted-foreground">Critical/High</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {stats.medium}
          </div>
          <div className="text-xs text-muted-foreground">Medium</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {stats.withReward}
          </div>
          <div className="text-xs text-muted-foreground">Rewarded</div>
        </div>
      </section>

      {/* Severity Legend */}
      <section className="flex flex-wrap gap-2 text-xs">
        <span className="text-muted-foreground">Severity:</span>
        {(
          Object.keys(severityColors) as Array<keyof typeof severityColors>
        ).map((severity) => (
          <span
            key={severity}
            className={`px-2 py-0.5 rounded border capitalize ${severityColors[severity]}`}
          >
            {severity}
          </span>
        ))}
      </section>

      {/* Published Disclosures */}
      {publishedDisclosures.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Published Disclosures
            </h2>
            <p className="text-sm text-muted-foreground">
              Vulnerabilities with public writeups and vendor acknowledgment.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {publishedDisclosures.map((disclosure) => (
              <DisclosureCard key={disclosure.slug} disclosure={disclosure} />
            ))}
          </div>
        </section>
      )}

      {/* Pending Disclosures */}
      {pendingDisclosures.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Pending Disclosures
            </h2>
            <p className="text-sm text-muted-foreground">
              Findings awaiting vendor approval or coordinated disclosure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {pendingDisclosures.map((disclosure) => (
              <DisclosureCard key={disclosure.slug} disclosure={disclosure} />
            ))}
          </div>
        </section>
      )}

      {/* Responsible Disclosure Notice */}
      <section className="rounded-lg bg-card border p-6 space-y-3">
        <h3 className="font-medium flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Responsible Disclosure
        </h3>
        <p className="text-sm text-muted-foreground">
          All vulnerabilities listed here were reported through proper
          responsible disclosure channels. I work with vendors to ensure issues
          are patched before public disclosure. If you&apos;re a vendor and need
          to contact me regarding a security issue, please reach out via{" "}
          <a href="mailto:ukejeeee@gmail.com" className="underline">
            email
          </a>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-8 space-y-4">
        <p className="text-muted-foreground">
          Interested in my security research or have a bug bounty program?
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
        </div>
      </section>
    </main>
  );
}
