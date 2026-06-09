/* ============================================================
   SARTHAK DEV STUDIO — Centralized Project Data
   All project content in one place for easy updates.
   ============================================================ */

export type CaseStudySection = {
  title: string;
  content: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortOutcome: string;
  description: string;
  tier: 1 | 2;
  role: string;
  teamSize?: string;
  timeline?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  caseStudy: {
    overview: string;
    problem: string;
    research: string;
    approach: string;
    development: string;
    challenges: string;
    results: string;
    gallery: string[];
    lessonsLearned: string;
    nextSteps: string;
    metrics?: string;
  };
};

export const projects: Project[] = [
  // ---- TIER 1: Homepage ----
  {
    slug: "grenomart",
    title: "Grenomart",
    category: "Full Stack Product",
    shortOutcome: "A complete e-commerce platform built from concept to deployment.",
    description:
      "Grenomart is a full-stack e-commerce platform designed for scalability and real-world usage. It features product management, cart functionality, user authentication, and payment integration — all built with a focus on clean architecture and production-ready code.",
    tier: 1,
    role: "Full Stack Developer",
    teamSize: "Solo",
    timeline: "3 months",
    liveUrl: "https://grenomart.vercel.app",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/grenomart",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Vercel",
    ],
    caseStudy: {
      overview:
        "Grenomart began as a question: can a single developer build a production-grade e-commerce platform that handles real transactions, scales gracefully, and provides a seamless user experience? This project is the answer.",
      problem:
        "Most e-commerce tutorials teach surface-level implementations — basic CRUD operations with no attention to authentication flows, payment security, inventory management, or production deployment. The goal was to go beyond tutorials and build something that could actually serve real customers.",
      research:
        "Studied the architecture of platforms like Shopify, Medusa, and Saleor. Analyzed common e-commerce failure points: cart abandonment, slow page loads, payment friction. Researched Stripe integration patterns and PostgreSQL optimization for product catalogs.",
      approach:
        "Chose Next.js for its hybrid rendering capabilities — static product pages for speed, server-side rendering for dynamic cart and checkout. Prisma provided type-safe database access. Tailwind CSS ensured rapid UI development without sacrificing design quality.",
      development:
        "Built in iterative phases: product catalog first, then cart logic, then authentication, then payment integration. Each phase was tested independently before integration. Database schema evolved through three major migrations as requirements became clearer.",
      challenges:
        "Payment integration required careful handling of webhooks and idempotency. Managing cart state across sessions without losing data during authentication flows was particularly complex. Optimizing database queries for filtered product searches required careful indexing.",
      results:
        "A fully functional e-commerce platform with sub-second page loads, secure payment processing, and a clean admin interface. The codebase is modular enough to support additional features like reviews, wishlists, and recommendation engines.",
      gallery: [],
      lessonsLearned:
        "Production code demands a different mindset than project code. Error handling, edge cases, and graceful degradation consume more development time than core features — and they should. The gap between 'it works' and 'it's ready' is where real engineering happens.",
      nextSteps:
        "Adding a recommendation engine based on purchase history, implementing real-time inventory tracking, and building an analytics dashboard for store owners.",
      metrics:
        "Sub-second page loads · Secure payment processing · Type-safe database layer · Production-deployed",
    },
  },
  {
    slug: "sarthak-dev-studio",
    title: "Sarthak Dev Studio V2",
    category: "Personal Brand Platform",
    shortOutcome: "A premium editorial portfolio that communicates technical depth.",
    description:
      "The website you're currently viewing. Designed as a personal brand platform rather than a portfolio, it uses Swiss editorial design principles, monochrome aesthetics, and intentional typography to communicate the Developer → Builder → Future Founder narrative.",
    tier: 1,
    role: "Designer & Developer",
    teamSize: "Solo",
    timeline: "Ongoing",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/Sarthak-Dev-Studio",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lenis",
      "Prisma",
      "PostgreSQL",
    ],
    caseStudy: {
      overview:
        "Most developer portfolios follow a predictable template: Hero, About, Skills, Projects, Contact. This project rejects that pattern entirely. Instead, it's built as a storytelling platform that guides visitors through a narrative about technical capability, product thinking, and builder mentality.",
      problem:
        "Generic developer portfolios fail to differentiate. Skill bars and project grids communicate nothing about how a developer thinks, why they build, or what problems they solve. The challenge was creating a digital presence that feels closer to a technology studio than a personal resume.",
      research:
        "Studied Swiss editorial design, luxury technology brand presentations, and creative engineering studio websites. Analyzed how typography hierarchy alone can create visual impact without relying on color or effects.",
      approach:
        "Monochrome-only color system. Instrument Serif for editorial impact. Inter for readability. Every section answers a specific question about the developer behind the work. Content architecture follows a deliberate storytelling flow rather than an information dump.",
      development:
        "Built on Next.js 16 with the App Router. Lenis provides smooth scrolling. Framer Motion handles scroll-triggered reveals. The design system uses CSS custom properties for consistency. Project data is centralized for easy content updates.",
      challenges:
        "Restraint was the hardest part. The temptation to add color, effects, and visual complexity was constant. Every design decision was filtered through the question: does this support the narrative, or does it distract from it?",
      results:
        "A website that communicates technical depth through design intentionality. Visitors engage with the thinking behind the work, not just screenshots of finished products.",
      gallery: [],
      lessonsLearned:
        "Less is almost always more. A monochrome palette forces every element to earn its place. Typography can carry an entire design when treated as a primary visual element rather than a container for content.",
      nextSteps:
        "Adding a blog section for technical writing, implementing dark/light mode toggle, and building a project metrics dashboard.",
    },
  },
  {
    slug: "gta6-landing-page",
    title: "GTA 6 Landing Page",
    category: "Frontend Experience",
    shortOutcome: "A high-fidelity landing page showcasing advanced frontend techniques.",
    description:
      "A conceptual landing page for GTA 6 that pushes the boundaries of frontend development. Built to demonstrate mastery of animations, scroll-driven interactions, and immersive web experiences — all while maintaining performance.",
    tier: 1,
    role: "Frontend Developer",
    teamSize: "Solo",
    timeline: "2 weeks",
    liveUrl: "https://gta6-landing.netlify.app",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/gta6-landing",
    techStack: [
      "React",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "Vite",
    ],
    caseStudy: {
      overview:
        "This project was an exercise in pushing frontend boundaries. The goal wasn't to replicate Rockstar's marketing — it was to build an immersive web experience that demonstrates what modern frontend engineering can achieve with scroll-driven animations, parallax layers, and cinematic pacing.",
      problem:
        "Most landing pages are static and predictable. The challenge was creating something that feels cinematic and interactive without sacrificing page performance or accessibility. Every animation had to serve the narrative, not just look impressive.",
      research:
        "Analyzed award-winning sites on Awwwards and FWA. Studied GSAP ScrollTrigger patterns, parallax implementation strategies, and performance optimization techniques for animation-heavy pages.",
      approach:
        "Layered composition: background parallax, mid-ground content reveals, and foreground interactive elements. Each section was designed as a 'scene' in a larger story. Performance budgets were set before development began.",
      development:
        "Combined Framer Motion for component-level animations with GSAP ScrollTrigger for scroll-driven sequences. Vite provided fast development iteration. Tailwind handled layout and responsive design.",
      challenges:
        "Balancing visual richness with performance was the core tension. Heavy animations on mobile required careful optimization — reducing particle counts, simplifying parallax layers, and implementing intersection observers to pause off-screen animations.",
      results:
        "A smooth, cinematic landing experience that maintains 60fps on modern devices. Demonstrates advanced frontend techniques that transfer directly to product work — onboarding flows, feature announcements, and marketing pages.",
      gallery: [],
      lessonsLearned:
        "Performance isn't a post-development concern — it's an architectural decision. Setting performance budgets before writing code prevents the painful optimization phase that often follows creative development.",
      nextSteps:
        "Exploring WebGL integration for 3D elements and experimenting with View Transitions API for smoother page-level animations.",
    },
  },
  {
    slug: "client-project",
    title: "Gyost Portfolio",
    category: "Client Work",
    shortOutcome: "A modern agency portfolio built for a real client.",
    description:
      "A production portfolio website built for Gyost, a design agency. The project involved translating client requirements into a responsive, performant website with interactive animations and a focus on showcasing creative work.",
    tier: 1,
    role: "Lead Developer",
    teamSize: "Solo",
    timeline: "4 weeks",
    liveUrl: "https://thegyost.netlify.app",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Netlify",
    ],
    caseStudy: {
      overview:
        "Gyost needed a portfolio that matched the quality of their design work. The website had to feel premium, load fast, and present their projects in a way that converted visitors into clients. This was a full client engagement — from requirements gathering to deployment.",
      problem:
        "The client's previous website was template-based and failed to communicate their creative capabilities. Projects were displayed as simple thumbnails with no context. The bounce rate was high, and inquiry conversions were low.",
      research:
        "Conducted competitor analysis of leading design agency websites. Identified patterns: large imagery, minimal navigation, storytelling project presentations, and clear CTAs. Gathered client preferences through structured interviews.",
      approach:
        "Content-first design strategy. Every layout decision was driven by the client's best work. Navigation was simplified to reduce friction. Animations were used strategically to guide attention rather than impress.",
      development:
        "Built with vanilla HTML, CSS, and JavaScript for maximum performance and zero framework overhead. GSAP provided smooth animations. Deployed on Netlify with continuous deployment from Git.",
      challenges:
        "Working within client constraints required constant communication and iteration. Balancing the client's desire for 'wow factor' with performance and usability principles was an ongoing negotiation. Scope management was critical.",
      results:
        "A fast, responsive portfolio that the client actively uses for client acquisition. The website loads in under 2 seconds and presents projects in a way that tells the story behind each piece of work.",
      gallery: [],
      lessonsLearned:
        "Client work teaches constraints that personal projects don't. Deadlines, feedback loops, and scope management are skills that matter as much as technical ability. Understanding the client's business goals is more important than implementing the latest framework.",
      nextSteps:
        "The client is considering a CMS integration for independent content updates and a blog section for thought leadership content.",
    },
  },
  // ---- TIER 2: Work Page Only ----
  {
    slug: "stygo-web-health",
    title: "Stygo Web Health",
    category: "Experimental",
    shortOutcome: "A healthcare platform exploring full-stack development patterns.",
    description:
      "An experimental healthcare platform that explores appointment scheduling, medical resource management, and health tracking. Built as a learning project to deepen understanding of full-stack patterns and API design.",
    tier: 2,
    role: "Full Stack Developer",
    teamSize: "Solo",
    timeline: "6 weeks",
    liveUrl: "http://stygowebhealth.netlify.app",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    caseStudy: {
      overview:
        "Stygo Web Health was born from curiosity about healthcare technology. The project explores how web platforms can simplify access to medical resources, appointment scheduling, and personal health tracking.",
      problem:
        "Healthcare platforms are typically complex, slow, and intimidating. The challenge was creating an interface that feels approachable while handling the data complexity inherent in health-related applications.",
      research:
        "Studied existing health platforms and their UX patterns. Analyzed HIPAA-compliant data handling approaches. Researched appointment scheduling algorithms and calendar integration patterns.",
      approach:
        "React frontend with Express backend, connected through RESTful APIs. MongoDB for flexible document storage suited to varying health record structures. Responsive design to ensure accessibility across devices.",
      development:
        "Iterative development with weekly milestones. Started with user authentication, then built the appointment system, then added health tracking features. Each module was developed as an independent service.",
      challenges:
        "Data modeling for health records required flexibility — different types of records have different structures. Implementing a calendar system that handles timezone differences and recurring appointments was more complex than anticipated.",
      results:
        "A functional prototype demonstrating core healthcare platform capabilities. The project deepened understanding of API design, database modeling, and the importance of data validation in sensitive domains.",
      gallery: [],
      lessonsLearned:
        "Domain knowledge matters. Building for healthcare — even as an experiment — exposed the critical importance of data validation, security considerations, and user trust that generic web development doesn't emphasize.",
      nextSteps:
        "Exploring integration with health APIs (FHIR standard) and implementing real-time notifications for appointment reminders.",
    },
  },
  {
    slug: "bitdevxp",
    title: "BitDevXp",
    category: "Full Stack Product",
    shortOutcome: "A production-grade startup MVP and consulting landing platform.",
    description:
      "A marketing and lead generation platform for BitDevXp, a software development and technology consulting firm. Features high-performance static rendering, interactive contact forms, and custom sanitization filters.",
    tier: 1,
    role: "Lead Architect & Developer",
    teamSize: "Solo",
    timeline: "4 weeks",
    liveUrl: "https://bitdevxp.vercel.app",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/BitDevXp",
    techStack: [
      "React 19",
      "TanStack Start",
      "Vite",
      "Tailwind CSS v4",
      "Framer Motion",
      "Zod",
    ],
    caseStudy: {
      overview:
        "BitDevXp was built as a modern, high-conversion landing page for software development and MVP consulting. The objective was to combine high-performance page loads with a strict monochrome design paradigm.",
      problem:
        "Startup founders need high-speed, direct paths to schedule consultation sessions. Existing solutions rely on heavy frameworks or external dependencies that load slowly, causing potential clients to drop off.",
      research:
        "Researched conversion optimization patterns, minimalist Swiss design rules, and lightweight security frameworks. Analyzed form spam patterns to design honeypots and rate limiting.",
      approach:
        "Used React 19 and TanStack Start for server rendering and type-safe routing. Configured Tailwind CSS v4 to establish a consistent, low-latency design token configuration.",
      development:
        "Implemented custom sanitization logic, built a rate limiter, added security headers, and structured form validation using Zod and React Hook Form.",
      challenges:
        "Achieving strict monochrome typography layout without visual boredom required meticulous typography sizing, spacing, and micro-interactions.",
      results:
        "An optimized lead-generation portal with perfect Lighthouse scores, integrated secure contacts, and zero spam entries.",
      gallery: [],
      lessonsLearned:
        "A strict monochrome design system makes visual hierarchy crucial. Good typography, fluid layout spacing, and well-designed details hold the site together.",
      nextSteps:
        "Integrating dynamic analytics and automated customer onboarding workflow pipelines.",
      metrics:
        "100% Lighthouse Performance · Zero Spam Forms · Type-safe routing · Production-ready",
    },
  },
  {
    slug: "raibyrai",
    title: "Rai by Rai Advisory",
    category: "Client Work",
    shortOutcome: "A premium, fiduciary-grade real estate portfolio management experience.",
    description:
      "A luxury web experience for a conflict-free real estate advisory firm. Tailored for HNIs, NRIs, and Family Offices, presenting real estate portfolio metrics, strategic services, and investment pipelines.",
    tier: 1,
    role: "Designer & Developer",
    teamSize: "Solo",
    timeline: "4 weeks",
    liveUrl: "https://thegyost.netlify.app",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/RaibyRai-Real-Estate-Advisory",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "IntersectionObserver",
      "Framer Motion",
    ],
    caseStudy: {
      overview:
        "A premium single-page digital experience built for a real estate advisory firm. Communicates trust, exclusive fiduciary principles, and multigenerational wealth strategies.",
      problem:
        "The traditional broker network relies on hidden kickbacks and biased deals. The advisory firm required a digital presence to emphasize their fee-only model and institutional due diligence.",
      research:
        "Analyzed luxury branding, user journeys of HNIs and NRIs, and regulatory frameworks of property transitions in India.",
      approach:
        "Crafted a customized color system based on cream and gold details, leveraging Cormorant Garamond serif fonts for high-end editorial storytelling.",
      development:
        "Constructed custom JavaScript scroll observers, infinite orbital graphics, and structured forms for scheduling direct sessions.",
      challenges:
        "Balancing visual luxury features (like Orbit animations and gold accents) with fast page load requirements and complete responsiveness.",
      results:
        "A performant, highly tailored single-page website that effectively qualifies high-net-worth inquiries.",
      gallery: [],
      lessonsLearned:
        "Luxury branding requires pixel-perfect attention to typography details, spacing, and restraint in animation timing.",
      nextSteps:
        "Adding an interactive client portfolio calculator and a digital investor portal.",
      metrics:
        "₹50Cr+ AUM Showcase · 2s Page Load Speed · Fiduciary Branding · Responsive UI",
    },
  },
  {
    slug: "udyamedge",
    title: "UdyamEdge",
    category: "Full Stack Product",
    shortOutcome: "An enterprise incubation and program management platform.",
    description:
      "A complete program management workflow platform for startup accelerators. Features settings control panel, multi-stage timeline, evaluations, shortlisting pipelines, and funding updates.",
    tier: 1,
    role: "Full Stack Engineer",
    teamSize: "Solo",
    timeline: "6 weeks",
    githubUrl: "https://github.com/SARTHAKSONAWANE01/udyamedge.com",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    caseStudy: {
      overview:
        "UdyamEdge is an enterprise platform developed to manage large-scale startup incubator programs and ideathons, mapping the entire startup journey from registration to pitching and funding.",
      problem:
        "Incubators struggle to coordinate settings, track startup progress, organize evaluations among dozens of judges, and distribute scores without high admin friction.",
      research:
        "Analyzed standard startup accelerator workflows (Y Combinator, Techstars) and designed database schemas for multi-phase milestones.",
      approach:
        "Created an interactive timeline on the frontend connected to a robust settings system on the backend, allowing instant global state management.",
      development:
        "Designed evaluation pipelines for judges, scheduling slots for workshops/pitches, and email dispatchers.",
      challenges:
        "Structuring database schemas and state sync logic so changing the global phase dynamically adapts dashboard panels.",
      results:
        "A production-ready incubator application successfully simplifying scoring, pipeline status, and startup evaluations.",
      gallery: [],
      lessonsLearned:
        "Enterprise dashboard design demands robust state management, clear timelines, and foolproof access controls.",
      nextSteps:
        "Integrating real-time messaging, calendar systems, and video conference slots.",
      metrics:
        "₹25K Funding Workflows · 6-Stage Timeline · Judge Scoring Modules · Secure Auth",
    },
  },
];

/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getTier1Projects(): Project[] {
  return projects.filter((p) => p.tier === 1);
}

export function getTier2Projects(): Project[] {
  return projects.filter((p) => p.tier === 2);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
