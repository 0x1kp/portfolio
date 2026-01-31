A modern, responsive portfolio website for showcasing security engineering projects, CVE disclosures, certifications, and academic research.

**Live:** [https://0x1kp.xyz](https://0x1kp.xyz)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.32 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.4.5 | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.10 | Utility-first CSS framework |
| **MDX** | 3.0.1 | Markdown with JSX support |
| **Plus Jakarta Sans** | - | Primary font (self-hosted via `next/font`) |

**Hosting:** Vercel
**Domain:** GoDaddy
**DNS:** Cloudflare

---

## Getting Started

### Prerequisites
- Node.js 20+ (LTS recommended)
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/0x1kp/portfolio.git
cd portfolio

# Install dependencies
pnpm install   # or npm install / yarn

# Start development server
pnpm dev       # or npm run dev / yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build     # Build the application
pnpm start     # Start production server
```

---

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, nav, metadata)
│   ├── (site)/
│   │   └── page.tsx              # Homepage with all featured sections
│   ├── projects/
│   │   └── page.tsx              # All projects page
│   ├── disclosures/
│   │   └── page.tsx              # CVE & bug bounty disclosures
│   ├── papers/
│   │   └── page.tsx              # Academic papers & research
│   └── certifications/
│       └── page.tsx              # Professional certifications
│
├── components/                   # Reusable React components
│   ├── TopDock.tsx               # Floating navigation dock
│   ├── ProjectCard.tsx           # Project display card
│   ├── DisclosureCard.tsx        # CVE/bounty display card
│   ├── PaperCard.tsx             # Academic paper card
│   ├── CertificationCard.tsx     # Certification display card
│   ├── SectionHeader.tsx         # Reusable section headers
│   └── MinimalNav.tsx            # Alternative navigation (unused)
│
├── data/                         # Content data files
│   ├── projects.ts               # Projects data & helper functions
│   ├── disclosures.ts            # CVE/bounty data & helpers
│   ├── papers.ts                 # Academic papers data & helpers
│   └── certifications.ts         # Certifications data & helpers
│
├── styles/
│   └── globals.css               # Design tokens & global styles
│
├── public/                       # Static assets
│   ├── logos/                    # Company & certification logos
│   ├── school/                   # University logos
│   ├── *.png, *.svg              # Project images & placeholders
│   └── EL.jpeg                   # Profile photo
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies & scripts
```

---

## Site Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured content from all sections |
| `/projects` | All projects grouped by category |
| `/disclosures` | CVE disclosures and bug bounty findings |
| `/papers` | Academic papers and research publications |
| `/certifications` | Professional certifications by issuer |

---

## Adding Content

All content is managed through TypeScript data files in the `/data` directory. Each file exports typed arrays and helper functions.

### Adding a New Project

Edit `/data/projects.ts`:

```typescript
// Add to the projects array
{
  slug: "my-new-project",                    // URL-friendly identifier
  title: "My New Project",                   // Display title
  description: "Short description...",       // Brief summary (1-2 sentences)
  longDescription: "Detailed description...", // Optional: extended description
  image: "/my-project.png",                  // Image in /public folder
  date: "2025",                              // Year or date
  dateRange: "2025 — Present",               // Optional: date range display
  tags: ["Python", "AWS", "Security"],       // Technology tags (max 4-5)
  featured: true,                            // Show on homepage?
  category: "security",                      // cloud | security | homelab | detection | research
  links: {
    github: "https://github.com/...",        // Optional: GitHub repo
    medium: "https://medium.com/...",        // Optional: Medium article
    live: "https://...",                     // Optional: Live demo
    writeup: "https://...",                  // Optional: Writeup link
  },
}
```

**Categories:**
- `cloud` - Cloud security projects (AWS, GCP, Azure)
- `security` - General security research
- `homelab` - Homelab builds and infrastructure
- `detection` - Detection engineering (SIEM, rules)
- `research` - Academic/formal research

### Adding a New Disclosure (CVE/Bug Bounty)

Edit `/data/disclosures.ts`:

```typescript
// Add to the disclosures array
{
  slug: "cve-2025-xxxxx",                    // URL-friendly identifier
  title: "Vulnerability Title",              // Brief title
  cve: "CVE-2025-XXXXX",                     // Optional: CVE ID
  vendor: "Company Name",                    // Affected vendor
  vendorLogo: "/logos/vendor.png",           // Optional: vendor logo
  severity: "high",                          // critical | high | medium | low | informational
  date: "2025",                              // Discovery/disclosure date
  reward: "$500",                            // Optional: "Hall of Fame", "$500", "None"
  status: "published",                       // published | pending
  description: "Brief description...",       // Short summary
  longDescription: "Detailed writeup...",    // Optional: extended details
  links: {
    writeup: "https://...",                  // Optional: Your writeup
    advisory: "https://...",                 // Optional: Vendor advisory
    cveLink: "https://nvd.nist.gov/...",     // Optional: NVD/MITRE link
  },
  featured: true,                            // Show on homepage? (max 3)
}
```

**Severity Levels:**
- `critical` - CVSS 9.0-10.0 (Red)
- `high` - CVSS 7.0-8.9 (Orange)
- `medium` - CVSS 4.0-6.9 (Yellow)
- `low` - CVSS 0.1-3.9 (Blue)
- `informational` - No CVSS (Gray)

### Adding a New Paper

Edit `/data/papers.ts`:

```typescript
// Add to the papers array
{
  slug: "paper-title-slug",                  // URL-friendly identifier
  title: "Full Paper Title",                 // Complete title
  abstract: "Paper abstract...",             // Abstract or summary
  date: "2025-04-30",                        // Publication date
  type: "academic",                          // academic | whitepaper | thesis | research
  institution: "University Name",            // Optional: affiliated institution
  coAuthors: ["Name 1", "Name 2"],           // Optional: co-authors
  tags: ["ML", "Cloud Security", "AWS"],     // Topic tags
  links: {
    pdf: "https://drive.google.com/...",     // Optional: PDF link
    doi: "https://doi.org/...",              // Optional: DOI link
    arxiv: "https://arxiv.org/...",          // Optional: arXiv link
    presentation: "https://...",             // Optional: Slides link
  },
  featured: true,                            // Show on homepage? (max 2)
}
```

### Adding a New Certification

Edit `/data/certifications.ts`:

```typescript
// Add to the certifications array
{
  slug: "cert-slug",                         // URL-friendly identifier
  name: "Short Name",                        // e.g., "Security+"
  fullName: "Full Certification Name",       // e.g., "CompTIA Security+"
  issuer: "Issuing Organization",            // e.g., "CompTIA"
  issuerLogo: "/logos/issuer.png",           // Logo in /public/logos
  date: "2024",                              // Year obtained
  expirationDate: "2027",                    // Optional: expiration year
  credentialId: "ABC123",                    // Optional: credential ID
  category: "security",                      // cloud | security | offensive | defensive | general
  links: {
    verify: "https://...",                   // Optional: verification URL
    credly: "https://credly.com/badges/...", // Optional: Credly badge
    certificate: "https://...",              // Optional: certificate PDF
  },
  featured: true,                            // Show on homepage? (max 4)
}
```

**Categories:**
- `cloud` - Cloud certifications (AWS, GCP, Azure)
- `security` - General security certs (Security+, CISSP)
- `offensive` - Offensive security (PenTest+, OSCP)
- `defensive` - Defensive security (CySA+, CDSA)
- `general` - General IT (A+, Network+)

### Adding Experience (Work History)

Experience is currently hardcoded in `/app/(site)/page.tsx`. To add a new role:

```tsx
// Add in the Experience section
<article className="rounded-lg bg-card border p-3 flex gap-3">
  <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
    <Image
      src="/logos/company.png"       // Add logo to /public/logos
      alt="Company Name"
      fill
      className="object-cover"
      sizes="48px"
      priority={false}
    />
  </div>
  <div className="flex-1">
    <div className="flex items-center justify-between gap-2">
      <h3 className="font-medium leading-none text-sm">Company Name</h3>
      <div className="text-xs tabular-nums text-muted-foreground">Start — End</div>
    </div>
    <div className="text-xs">Job Title</div>
  </div>
</article>
```

### Adding Education

Education is currently hardcoded in `/app/(site)/page.tsx`. To add a new degree:

```tsx
// Add in the Education section
<article className="rounded-lg bg-card border p-3 flex gap-3">
  <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
    <Image
      src="/school/university.png"   // Add logo to /public/school
      alt="University Name"
      fill
      className="object-cover"
      sizes="48px"
      priority={false}
    />
  </div>
  <div className="flex-1">
    <div className="flex items-center justify-between gap-2">
      <h3 className="font-medium leading-none text-sm">University Name</h3>
      <div className="text-xs tabular-nums text-muted-foreground">Start — End</div>
    </div>
    <div className="text-xs">Degree Name</div>
  </div>
</article>
```

---

## Customization

### Updating Social Links

Edit `/app/layout.tsx` to change the social links in the TopDock:

```tsx
<TopDock
  showThemeToggle={true}
  links={{
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://www.linkedin.com/in/YOUR_PROFILE",
    x: "https://twitter.com/YOUR_HANDLE",
    youtube: "https://youtube.com/@YOUR_CHANNEL",
  }}
/>
```

### Updating Metadata

Edit `/app/layout.tsx` for site-wide metadata:

```tsx
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Your description here",
};
```

### Changing Colors/Theme

Edit `/styles/globals.css` to modify the design tokens:

```css
:root {
  --background: 0 0% 100%;      /* Light mode background */
  --foreground: 0 0% 3.9%;      /* Light mode text */
  /* ... other tokens */
}

.dark {
  --background: 210 11.1% 3.53%; /* Dark mode background */
  --foreground: 0 0% 98%;        /* Dark mode text */
  /* ... other tokens */
}
```

### Adding Images

1. Add images to the `/public` directory
2. Reference them with absolute paths: `/image-name.png`
3. For logos: `/logos/company.png`
4. For school logos: `/school/university.png`

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy on push

### Manual Build

```bash
pnpm build
pnpm start
```

---

## Troubleshooting

### MDX Module Not Found
```bash
pnpm add -D @mdx-js/loader
pnpm add @mdx-js/react
```

### Node Version Issues
Use Node.js 20 LTS:
```bash
nvm use 20
# or create .nvmrc with "20"
```

### CSS Import Error
If you see `Module not found: Can't resolve './globals.css'`, ensure the import in `app/layout.tsx` is:
```typescript
import '@/styles/globals.css'
```

---

## License

All rights reserved. © 2025 David Ukeje

---

## Contact

- **Email:** ukejeeee@gmail.com
- **LinkedIn:** [linkedin.com/in/ukeje-u-9ab588109](https://www.linkedin.com/in/ukeje-u-9ab588109/)
- **GitHub:** [github.com/0x1kp](https://github.com/0x1kp)
- **Twitter/X:** [@0x1kp](https://twitter.com/0x1kp)
