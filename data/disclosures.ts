export type Disclosure = {
  slug: string;
  title: string;
  cve?: string;
  vendor: string;
  vendorLogo?: string;
  severity: "critical" | "high" | "medium" | "low" | "informational";
  date: string;
  reward?: string;
  status: "published" | "pending";
  description: string;
  longDescription?: string;
  links: {
    writeup?: string;
    advisory?: string;
    cveLink?: string;
  };
  featured: boolean;
};

// Severity colors for display
export const severityColors: Record<Disclosure["severity"], string> = {
  critical: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  informational: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export const disclosures: Disclosure[] = [
  {
    slug: "cve-2025-placeholder-1",
    title: "Authentication Bypass in Web Application",
    cve: "CVE-2025-XXXXX",
    vendor: "Redacted",
    severity: "high",
    date: "2025",
    reward: "Pending",
    status: "pending",
    description:
      "Discovered an authentication bypass vulnerability allowing unauthorized access to protected resources.",
    longDescription:
      "Full writeup pending vendor approval. This vulnerability allowed attackers to bypass authentication mechanisms through a flaw in session handling logic.",
    links: {},
    featured: true,
  },
  {
    slug: "cve-2025-placeholder-2",
    title: "Stored XSS in Admin Dashboard",
    cve: "CVE-2025-XXXXX",
    vendor: "Redacted",
    severity: "medium",
    date: "2025",
    reward: "Hall of Fame",
    status: "pending",
    description:
      "Identified a stored cross-site scripting vulnerability in the administrative interface.",
    longDescription:
      "Writeup pending approval. The vulnerability existed in user input fields that were not properly sanitized before being rendered in the admin dashboard.",
    links: {},
    featured: true,
  },
  {
    slug: "cve-2025-placeholder-3",
    title: "Information Disclosure via API Endpoint",
    cve: "CVE-2025-XXXXX",
    vendor: "Redacted",
    severity: "medium",
    date: "2025",
    reward: "None",
    status: "pending",
    description:
      "Found an API endpoint exposing sensitive user information without proper authorization checks.",
    longDescription:
      "Pending disclosure. An unauthenticated API endpoint was returning sensitive user data including email addresses and internal IDs.",
    links: {},
    featured: true,
  },
  {
    slug: "bugbounty-placeholder-1",
    title: "IDOR Leading to Account Takeover",
    vendor: "Redacted",
    severity: "critical",
    date: "2024",
    reward: "$500",
    status: "pending",
    description:
      "Discovered an insecure direct object reference vulnerability that could lead to full account takeover.",
    longDescription:
      "Bug bounty finding. The application failed to validate user ownership of resources, allowing attackers to modify other users' account settings.",
    links: {},
    featured: false,
  },
  {
    slug: "bugbounty-placeholder-2",
    title: "SQL Injection in Search Functionality",
    vendor: "Redacted",
    severity: "high",
    date: "2024",
    reward: "$300",
    status: "pending",
    description:
      "Identified SQL injection vulnerability in the application's search feature.",
    longDescription:
      "The search parameter was not properly sanitized, allowing for SQL injection attacks that could extract database contents.",
    links: {},
    featured: false,
  },
];

// Helper functions
export function getFeaturedDisclosures(limit?: number): Disclosure[] {
  const featured = disclosures.filter((d) => d.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getDisclosuresBySeverity(
  severity: Disclosure["severity"]
): Disclosure[] {
  return disclosures.filter((d) => d.severity === severity);
}

export function getDisclosureBySlug(slug: string): Disclosure | undefined {
  return disclosures.find((d) => d.slug === slug);
}

export function getPublishedDisclosures(): Disclosure[] {
  return disclosures.filter((d) => d.status === "published");
}

export function getPendingDisclosures(): Disclosure[] {
  return disclosures.filter((d) => d.status === "pending");
}
