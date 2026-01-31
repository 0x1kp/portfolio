export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  date: string;
  dateRange?: string;
  tags: string[];
  featured: boolean;
  category: "security" | "cloud" | "homelab" | "detection" | "research";
  links: {
    github?: string;
    medium?: string;
    live?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
  // Featured Projects (shown on homepage)
  {
    slug: "cross-cloud-role-sanity-checker",
    title: "Cross-Cloud Role Sanity Checker",
    description:
      "Security-focused utility designed to validate AWS IAM roles and GCP service accounts before initiating cross-cloud data transfers.",
    longDescription:
      "Cross-Cloud Role Sanity Checker is a security-focused utility designed to validate AWS IAM roles and GCP service accounts before initiating cross-cloud data transfers — such as AWS DataSync operations targeting GCP. It ensures proper permissions, trust relationships, and policy configurations are in place before any data movement occurs.",
    image: "/CCRSC.png",
    date: "2025",
    dateRange: "2025 — Present",
    tags: ["Python", "AWS", "GCP", "IAM", "Bash"],
    featured: true,
    category: "cloud",
    links: {
      github: "https://github.com/0x1kp/CrossCloudRoleSanityChecker",
    },
  },
  {
    slug: "log-ingestion-splunk-elastic",
    title: "Log Ingestion Workflow with Splunk and Elastic",
    description:
      "Log ingestion, detections, attack steps, queries and dashboards following simulated attacks on Windows 10 virtual machine.",
    longDescription:
      "Comprehensive log ingestion pipeline demonstrating the full workflow from log collection to detection. Includes Sysmon configuration, Splunk and Elastic SIEM setup, custom detection rules, and dashboards for monitoring simulated attack scenarios on Windows endpoints.",
    image: "/SplEla.png",
    date: "2023",
    dateRange: "2023 — Present",
    tags: ["SPL", "Sysmon", "Kibana", "Splunk", "Elastic"],
    featured: true,
    category: "detection",
    links: {
      github: "https://github.com/0x1kp",
    },
  },
  {
    slug: "threat-hunting-pcap",
    title: "Threat Hunting from Malicious Traffic in PCAP",
    description:
      "Analyzed multiple PCAP files to identify malicious activity such as ransomware, beaconing etc. and wrote Suricata signatures to catch them.",
    longDescription:
      "Deep-dive analysis of packet captures containing real-world malicious traffic patterns. Identified ransomware C2 communications, beaconing behavior, and data exfiltration attempts. Developed custom Suricata signatures and Zeek scripts to detect similar threats in production environments.",
    image: "/zeek.png",
    date: "2023",
    dateRange: "2023 — Present",
    tags: ["Zeek", "Suricata", "Wireshark", "PCAP", "Network Analysis"],
    featured: true,
    category: "security",
    links: {
      github: "https://github.com/0x1kp",
    },
  },
  {
    slug: "yara-sigma-detection-rules",
    title: "Yara & Sigma Detection Rules Repo",
    description:
      "Identified multiple malware families, developed detections to successfully identify malicious files and activity within devices.",
    longDescription:
      "Repository of custom YARA rules for malware detection and Sigma rules for log-based threat detection. Covers multiple malware families including ransomware, trojans, and APT tooling. Rules are tested against real samples and mapped to MITRE ATT&CK framework.",
    image: "/yarasigma.png",
    date: "2023",
    dateRange: "2023 — Present",
    tags: ["YARA", "Sigma", "PowerShell", "Malware Analysis", "MITRE ATT&CK"],
    featured: true,
    category: "detection",
    links: {
      github: "https://github.com/0x1kp",
    },
  },

  // Homelab Series (links to Medium)
  {
    slug: "homelab-part-1-foundation",
    title: "Homelab Part 1: Foundation — Hardware, Networking, and Proxmox",
    description:
      "Building the foundation of a security-focused homelab with enterprise hardware, network segmentation, and Proxmox virtualization.",
    longDescription:
      "The first part of a comprehensive homelab series covering the physical and virtual infrastructure setup. Includes hardware selection, network architecture design with VLANs, Proxmox VE installation and configuration, and preparing the environment for security tools and Active Directory.",
    image: "/homelab-foundation.svg",
    date: "2025",
    dateRange: "2025",
    tags: ["Proxmox", "Networking", "VLANs", "Virtualization", "Homelab"],
    featured: false,
    category: "homelab",
    links: {
      medium:
        "https://0x1kp.medium.com/part-1-foundation-hardware-networking-and-proxmox-8c7fbb24feec",
    },
  },
  {
    slug: "homelab-part-2-core-infrastructure",
    title: "Homelab Part 2: Core Infrastructure — Active Directory, Clients, and SIEM",
    description:
      "Setting up Active Directory domain services, Windows clients, and integrating a SIEM for centralized logging and monitoring.",
    longDescription:
      "The second part of the homelab series focusing on enterprise infrastructure. Covers Windows Server with Active Directory Domain Services, joining Windows clients to the domain, Group Policy configuration, and deploying a SIEM solution for centralized log collection and security monitoring.",
    image: "/homelab-infrastructure.svg",
    date: "2025",
    dateRange: "2025",
    tags: ["Active Directory", "Windows Server", "SIEM", "Group Policy", "Logging"],
    featured: false,
    category: "homelab",
    links: {
      medium:
        "https://0x1kp.medium.com/part-2-core-infrastructure-active-directory-clients-and-siem-d8bb05777c1f",
    },
  },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllCategories(): Project["category"][] {
  return [...new Set(projects.map((p) => p.category))];
}
