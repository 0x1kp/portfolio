import SectionHeader from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="flex flex-col space-y-12">
      {/* Hero */}
      <section id="hero" aria-labelledby="hero-title">
        <div className="w-full space-y-8">
          <div className="flex justify-between gap-4 items-start">
            <div className="flex-1 space-y-2">
              <h1 id="hero-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Hi, I&apos;m David 👋
              </h1>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">
                Security Analyst &amp; Engineer focusing on Incident Response and Cloud Security.
              </p>
            </div>
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32 border">
              <img className="h-full w-full object-cover" src="/EL.jpeg" alt="Profile" />
            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="flex-1 space-y-2">
              <h3 id="hero-title" className="text-2xl font-semibold tracking-tight sm:text-xl">
                About
              </h3>
              <p>
                I am a Security Engineer who doesn't trust assumptions. I build and break systems, then automate the guardrails: detections, incident response, and secure cloud architectures. My work spans AWS/GCP IAM sanity checks, log pipelines (Splunk + Elastic), PCAP threat hunting with Zeek/Suricata, and rule engineering (YARA/Sigma).
              </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" aria-labelledby="projects-title">
        <div className="space-y-12 w-full py-2">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <SectionHeader
              pill="My Projects"
              title="Featured Projects"
              description="Open source and Proprietary projects and contributions. Here are a few highlights."
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:shadow transition-all text-sm"
            >
              View All Projects
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Research */}
      <section id="security" aria-labelledby="security-title" className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader
            pill="Security Research"
            title="Bug Bounty & Disclosures"
            description="Selected findings, write-ups, and vendor advisories."
          />
        </div>
        <ul className="space-y-6">
          <li>
            <h3 className="font-medium">CVE-2025-REDACTED</h3>
            <div className="text-xs text-muted-foreground">2025 • Reward: None • Severity: MEDIUM</div>
            <p className="mt-1 text-sm text-muted-foreground">Unreleased writeup pending approval!</p>
            <div className="mt-1 flex gap-3 text-sm">
              <a className="underline" href="#">Write-up</a>
              <a className="underline" href="#">Vendor Advisory</a>
            </div>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" aria-labelledby="experience-title" className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader
            pill="Experience"
            title="Where I've Worked"
            description="Previous roles, timelines, and highlights from recent engagements."
          />
        </div>
        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/aws.png"
            alt="Amazon Web Services"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Amazon Web Services</h3>
              <div className="text-xs tabular-nums text-muted-foreground">May 2024 — Present</div>
            </div>
            <div className="text-xs">Cloud Engineer</div>
          </div>
        </article>

        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/tfs.png"
            alt="TFS Consulting Inc."
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">TFS Inc.</h3>
              <div className="text-xs tabular-nums text-muted-foreground">Aug 2022 — Dec 2024</div>
            </div>
            <div className="text-xs">Security Consultant</div>
          </div>
        </article>

        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/PAI.png"
            alt="ParagraphAI"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">ParagraphAI</h3>
              <div className="text-xs tabular-nums text-muted-foreground">Dec 2023 — March 2024</div>
            </div>
            <div className="text-xs">Information Technology Manager</div>
          </div>
        </article>

        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/PAI.png"
            alt="ParagraphAI"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">ParagraphAI</h3>
              <div className="text-xs tabular-nums text-muted-foreground">Aug 2022 — Dec 2023</div>
            </div>
            <div className="text-xs">Information Technology Engineer</div>
          </div>
        </article>
      </section>

      {/* Education */}
      <section id="education" aria-labelledby="education-title" className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader
            pill="Education"
            title="What I Studied"
            description="Degrees and programs that shaped my technical foundation."
          />
        </div>
        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/school/nyu.png"
            alt="NYU"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">New York University</h3>
              <div className="text-xs tabular-nums text-muted-foreground">Aug 2024 — Dec 2025</div>
            </div>
            <div className="text-xs">MSc. Cybersecurity</div>
          </div>
        </article>

        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/school/wgu.png"
            alt="WGU"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Western Governor's University</h3>
              <div className="text-xs tabular-nums text-muted-foreground">May 2023 — Jan 2024</div>
            </div>
            <div className="text-xs">BSc. Cybersecurity</div>
          </div>
        </article>

        <article className="rounded-lg bg-card border p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/school/uoft.png"
            alt="UofT"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">University of Toronto</h3>
              <div className="text-xs tabular-nums text-muted-foreground">Aug 2017 — May 2022</div>
            </div>
            <div className="text-xs">HBSc. Computer Science</div>
          </div>
        </article>

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 id="hero-title" className="text-2xl font-semibold tracking-tight sm:text-xl">Certifications</h3>
        </div>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/aws.png"
            alt="AWS"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Solutions Architect Associate</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2024</div>
            </div>
            <div className="text-xs">AWS</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/comptia.png"
            alt="CompTIA"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">A+</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">CompTIA</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/comptia.png"
            alt="CompTIA"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Network+</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">CompTIA</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/comptia.png"
            alt="CompTIA"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Security+</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">CompTIA</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/comptia.png"
            alt="CompTIA"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">CySA+</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">CompTIA</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/comptia.png"
            alt="CompTIA"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">PenTest+</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">CompTIA</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/htb.png"
            alt="HTB"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Certified Defensive Security Analyst (CDSA)</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2024</div>
            </div>
            <div className="text-xs">HackTheBox</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/isc2.png"
            alt="ISC2"
            fill
            className="object-contain p-1"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">System Security Certified Practicioner (SSCP)</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2023</div>
            </div>
            <div className="text-xs">ISC2</div>
          </div>
        </article>

        <article className="rounded-lg p-3 flex gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border bg-white">
          <Image
            src="/logos/ccd.png"
            alt="CCD"
            fill
            className="object-cover"
            sizes="48px"
            priority={false}
          />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium leading-none text-sm">Certified Cyber Defender</h3>
              <div className="text-xs tabular-nums text-muted-foreground">2025</div>
            </div>
            <div className="text-xs">CyberDefenders</div>
          </div>
        </article>
      </section>

      

      {/* Posts */}
      <section id="posts" aria-labelledby="blog-title" className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader
            pill="Papers"
            title="Papers"
            description="Academic writings and thoughts on security, Cloud Infrastructure, and engineering craft."
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <article className="rounded-lg bg-card border p-3 flex flex-col gap-2">
            <div className="text-xs text-muted-foreground">2025-04-30</div>
            <h3 className="font-medium">Implementation of Machine Learning in Cloud Security Threat Hunting</h3>
            <p className="text-sm text-muted-foreground">Practical benefits of ML algorithms when used in AWS Threat Hunting workflows.</p>
            <a className="underline text-sm mt-auto" href="https://drive.google.com/file/d/1gsxCrC-ZzwRTszzprXz2P7KVKHVn7eJd/view?usp=share_link">Read more</a>
          </article>
          <article className="rounded-lg bg-card border p-3 flex flex-col gap-2">
            <div className="text-xs text-muted-foreground">2025-04-30</div>
            <h3 className="font-medium">Phased Migration Strategy towards Post Quantum Cryptography</h3>
            <p className="text-sm text-muted-foreground">Practical Implementation and Benefits of Phased Migration towards PQC</p>
            <a className="underline text-sm mt-auto" href="https://drive.google.com/file/d/1oE1nfzXUwL0FiqHnvnbNwJDkPmH03AUb/view?usp=share_link">Read more</a>
          </article>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="space-y-3">
        <div className="text-center space-y-2">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-white/10">Contact</div>
          <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Reach out via <a className="underline" href="mailto:ukejeeee@gmail.com">email</a> or find me on
            <a className="underline ml-1" href="https://www.linkedin.com/in/ukeje-u-9ab588109/" target="_blank" rel="me noopener">LinkedIn</a>,
            or <a className="underline ml-1" href="https://github.com/0x1kp/" target="_blank" rel="me noopener">Github</a>,
          </p>
        </div>
      </section>

      <footer className="pt-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} David Ukeje. All rights reserved.</p>
      </footer>
    </main>
  );
}
