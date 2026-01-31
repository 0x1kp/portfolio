export type Paper = {
  slug: string;
  title: string;
  abstract: string;
  date: string;
  type: "academic" | "whitepaper" | "thesis" | "research";
  institution?: string;
  coAuthors?: string[];
  tags: string[];
  links: {
    pdf?: string;
    doi?: string;
    arxiv?: string;
    presentation?: string;
  };
  featured: boolean;
};

// Type labels for display
export const paperTypeLabels: Record<Paper["type"], string> = {
  academic: "Academic Paper",
  whitepaper: "Whitepaper",
  thesis: "Thesis",
  research: "Research",
};

export const papers: Paper[] = [
  {
    slug: "ml-cloud-security-threat-hunting",
    title: "Implementation of Machine Learning in Cloud Security Threat Hunting",
    abstract:
      "This paper explores the practical benefits of implementing machine learning algorithms within AWS threat hunting workflows. It examines how ML models can enhance detection capabilities, reduce false positives, and automate the identification of sophisticated threats in cloud environments.",
    date: "2025-04-30",
    type: "academic",
    institution: "New York University",
    tags: [
      "Machine Learning",
      "Cloud Security",
      "AWS",
      "Threat Hunting",
      "SIEM",
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1gsxCrC-ZzwRTszzprXz2P7KVKHVn7eJd/view?usp=share_link",
    },
    featured: true,
  },
  {
    slug: "pqc-migration-strategy",
    title: "Phased Migration Strategy towards Post Quantum Cryptography",
    abstract:
      "An examination of practical implementation strategies and benefits of phased migration towards post-quantum cryptography. This paper addresses the challenges organizations face in transitioning from classical cryptographic systems to quantum-resistant alternatives.",
    date: "2025-04-30",
    type: "academic",
    institution: "New York University",
    tags: [
      "Post-Quantum Cryptography",
      "Cryptography",
      "Migration Strategy",
      "Security Architecture",
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1oE1nfzXUwL0FiqHnvnbNwJDkPmH03AUb/view?usp=share_link",
    },
    featured: true,
  },
];

// Helper functions
export function getFeaturedPapers(limit?: number): Paper[] {
  const featured = papers.filter((p) => p.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getPapersByType(type: Paper["type"]): Paper[] {
  return papers.filter((p) => p.type === type);
}

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

export function getAllPaperTypes(): Paper["type"][] {
  return [...new Set(papers.map((p) => p.type))];
}
