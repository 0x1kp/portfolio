import {
  certifications,
  getAllCategories,
  getAllIssuers,
  categoryInfo,
} from "@/data/certifications";
import { CertificationCard } from "@/components/CertificationCard";
import Image from "next/image";

export const metadata = {
  title: "Certifications | David Ukeje",
  description:
    "Professional certifications in cloud computing, cybersecurity, and IT from AWS, CompTIA, ISC2, HackTheBox, and more.",
};

export default function CertificationsPage() {
  const categories = getAllCategories();
  const issuers = getAllIssuers();

  // Group by issuer for display
  const certsByIssuer = issuers.reduce(
    (acc, issuer) => {
      acc[issuer] = certifications.filter((c) => c.issuer === issuer);
      return acc;
    },
    {} as Record<string, typeof certifications>
  );

  // Stats
  const stats = {
    total: certifications.length,
    cloud: certifications.filter((c) => c.category === "cloud").length,
    security: certifications.filter(
      (c) => c.category === "security" || c.category === "defensive"
    ).length,
    offensive: certifications.filter((c) => c.category === "offensive").length,
  };

  return (
    <main className="flex flex-col space-y-12">
      {/* Hero */}
      <section id="certifications-hero" aria-labelledby="certifications-title">
        <div className="w-full space-y-4">
          <h1
            id="certifications-title"
            className="text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Certifications
          </h1>
          <p className="max-w-[600px] md:text-xl text-muted-foreground">
            Professional certifications in cloud computing, cybersecurity,
            offensive security, and IT fundamentals.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-xs text-muted-foreground">Total Certs</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.cloud}</div>
          <div className="text-xs text-muted-foreground">Cloud</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">
            {stats.security}
          </div>
          <div className="text-xs text-muted-foreground">Security/Defense</div>
        </div>
        <div className="rounded-lg bg-card border p-4 text-center">
          <div className="text-2xl font-bold text-red-400">
            {stats.offensive}
          </div>
          <div className="text-xs text-muted-foreground">Offensive</div>
        </div>
      </section>

      {/* Category Legend */}
      <section className="flex flex-wrap gap-2 text-xs">
        <span className="text-muted-foreground">Categories:</span>
        {categories.map((category) => (
          <span
            key={category}
            className={`px-2 py-0.5 rounded border ${categoryInfo[category].color}`}
          >
            {categoryInfo[category].label}
          </span>
        ))}
      </section>

      {/* Certifications by Issuer */}
      {issuers.map((issuer) => {
        const issuerCerts = certsByIssuer[issuer];
        if (issuerCerts.length === 0) return null;

        return (
          <section key={issuer} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border bg-white">
                <Image
                  src={issuerCerts[0].issuerLogo}
                  alt={issuer}
                  fill
                  className="object-contain p-0.5"
                  sizes="32px"
                />
              </div>
              <h2 className="text-xl font-semibold">{issuer}</h2>
              <span className="text-sm text-muted-foreground">
                ({issuerCerts.length} cert{issuerCerts.length > 1 ? "s" : ""})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {issuerCerts.map((cert) => (
                <CertificationCard key={cert.slug} certification={cert} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Verification Note */}
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
            className="text-green-400"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Verification
        </h3>
        <p className="text-sm text-muted-foreground">
          All certifications listed are active and can be verified through the
          respective issuing organization. Click the verification links on
          individual certifications to confirm credentials, or contact me
          directly for credential IDs.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-8 space-y-4">
        <p className="text-muted-foreground">
          Questions about my qualifications or looking for specific expertise?
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
