export type Certification = {
  slug: string;
  name: string;
  fullName?: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  category: "cloud" | "security" | "offensive" | "defensive" | "general";
  links: {
    verify?: string;
    credly?: string;
    certificate?: string;
  };
  featured: boolean;
};

// Category display info
export const categoryInfo: Record<
  Certification["category"],
  { label: string; color: string }
> = {
  cloud: {
    label: "Cloud",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  security: {
    label: "Security",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  offensive: {
    label: "Offensive",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  defensive: {
    label: "Defensive",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  general: {
    label: "General IT",
    color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  },
};

export const certifications: Certification[] = [
  // AWS
  {
    slug: "aws-saa",
    name: "Solutions Architect Associate",
    fullName: "AWS Certified Solutions Architect - Associate",
    issuer: "AWS",
    issuerLogo: "/logos/aws.png",
    date: "2024",
    category: "cloud",
    links: {
      // Add your Credly link when available
      // credly: "https://www.credly.com/badges/...",
    },
    featured: true,
  },

  // HackTheBox
  {
    slug: "htb-cdsa",
    name: "Certified Defensive Security Analyst (CDSA)",
    fullName: "HackTheBox Certified Defensive Security Analyst",
    issuer: "HackTheBox",
    issuerLogo: "/logos/htb.png",
    date: "2024",
    category: "defensive",
    links: {
      // Add verification link when available
    },
    featured: true,
  },

  // ISC2
  {
    slug: "isc2-sscp",
    name: "Systems Security Certified Practitioner (SSCP)",
    fullName: "ISC2 Systems Security Certified Practitioner",
    issuer: "ISC2",
    issuerLogo: "/logos/isc2.png",
    date: "2023",
    category: "security",
    links: {
      // Add verification link when available
    },
    featured: true,
  },

  // CyberDefenders
  {
    slug: "ccd",
    name: "Certified Cyber Defender",
    fullName: "CyberDefenders Certified Cyber Defender",
    issuer: "CyberDefenders",
    issuerLogo: "/logos/ccd.png",
    date: "2025",
    category: "defensive",
    links: {
      // Add verification link when available
    },
    featured: true,
  },

  // CompTIA Certs
  {
    slug: "comptia-pentest",
    name: "PenTest+",
    fullName: "CompTIA PenTest+",
    issuer: "CompTIA",
    issuerLogo: "/logos/comptia.png",
    date: "2023",
    category: "offensive",
    links: {},
    featured: false,
  },
  {
    slug: "comptia-cysa",
    name: "CySA+",
    fullName: "CompTIA Cybersecurity Analyst",
    issuer: "CompTIA",
    issuerLogo: "/logos/comptia.png",
    date: "2023",
    category: "defensive",
    links: {},
    featured: false,
  },
  {
    slug: "comptia-security",
    name: "Security+",
    fullName: "CompTIA Security+",
    issuer: "CompTIA",
    issuerLogo: "/logos/comptia.png",
    date: "2023",
    category: "security",
    links: {},
    featured: false,
  },
  {
    slug: "comptia-network",
    name: "Network+",
    fullName: "CompTIA Network+",
    issuer: "CompTIA",
    issuerLogo: "/logos/comptia.png",
    date: "2023",
    category: "general",
    links: {},
    featured: false,
  },
  {
    slug: "comptia-aplus",
    name: "A+",
    fullName: "CompTIA A+",
    issuer: "CompTIA",
    issuerLogo: "/logos/comptia.png",
    date: "2023",
    category: "general",
    links: {},
    featured: false,
  },
];

// Helper functions
export function getFeaturedCertifications(limit?: number): Certification[] {
  const featured = certifications.filter((c) => c.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getCertificationsByCategory(
  category: Certification["category"]
): Certification[] {
  return certifications.filter((c) => c.category === category);
}

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}

export function getCertificationsByIssuer(issuer: string): Certification[] {
  return certifications.filter((c) => c.issuer === issuer);
}

export function getAllCategories(): Certification["category"][] {
  return [...new Set(certifications.map((c) => c.category))];
}

export function getAllIssuers(): string[] {
  return [...new Set(certifications.map((c) => c.issuer))];
}
