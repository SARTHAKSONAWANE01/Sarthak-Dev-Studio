# 🚀 Sarthak Dev Studio

Sarthak Dev Studio is a high-end, premium portfolio website designed to showcase projects, skills, and professional services. Built on the modern Next.js App Router framework, the application utilizes premium aesthetics, fluid Framer Motion animations, a fully custom component system, and an integrated PostgreSQL database via Prisma for handling messages and contact requests.

---

## ✨ Features

- **🌀 Custom Loading & Transitions**: A custom loading screen sequence combined with elegant zoom transitions when the home page renders.
- **🖱️ Interactive Custom Cursor**: A custom-designed cursor trail that dynamically interacts with clickable elements.
- **🎨 Ultra-Modern Dark Glassmorphism Design**: Curated dark gradients, glow effects, custom scrollbars, and neon glows (`neon-blue`, `neon-pink`, and `teal-soft`).
- **📱 Responsive & Accessible Routing**: Deep routes (About, Skills, Projects, Contact) implemented via the Next.js App Router.
- **📩 Dynamic Contact Form**: Integrated with a Next.js API route that validates inputs with Zod and persists submissions to a PostgreSQL database using Prisma.

---

## 📂 File & Folder Structure

Below is the complete detailed folder structure of the repository:

```text
Sarthak Dev Studio/
├── prisma/                         # Database schema and migration settings
│   └── schema.prisma               # Prisma schema definition (ContactMessage model)
├── public/                         # Static assets (images, icons, favicon)
├── src/                            # Main React application source code
│   ├── app/                        # Next.js App Router pages, layouts, and API routes
│   │   ├── about/                  # About page component entry
│   │   │   └── page.tsx
│   │   ├── api/                    # Backend API routes
│   │   │   └── contact/            # Contact Form handler API
│   │   │   │   └── route.ts        # POST endpoint for receiving message data
│   │   ├── contact/                # Contact page component entry
│   │   │   └── page.tsx
│   │   ├── projects/               # Projects listing page component entry
│   │   │   └── page.tsx
│   │   ├── skills/                 # Skills page component entry
│   │   │   └── page.tsx
│   │   ├── favicon.ico             # App favicon
│   │   ├── globals.css             # Main styling including Tailwind theme rules
│   │   ├── layout.tsx              # Base Root Layout wrapper (metadata, HTML, Body)
│   │   ├── not-found.tsx           # Custom styled 404 page
│   │   └── page.tsx                # Home page component (assembles sections)
│   ├── components/                 # Custom React component library
│   │   ├── ui/                     # Reusable primitive UI components (Shadcn UI base)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (40+ other primitive UI files)
│   │   ├── About.tsx               # Content section for the About view
│   │   ├── Contact.tsx             # Interactive contact form component
│   │   ├── CustomCursor.tsx        # Framer Motion animated mouse cursor trail
│   │   ├── Footer.tsx              # Standard studio page footer component
│   │   ├── Hero.tsx                # Hero section with typing/glow animations
│   │   ├── LoadingScreen.tsx       # Fullscreen CSS/JS loading animation screen
│   │   ├── Navbar.tsx              # Floating header navigation component
│   │   ├── Projects.tsx            # Grid listing of development projects
│   │   ├── Skills.tsx              # Visual progress/category charts for skills
│   │   └── ZoomTransition.tsx      # Interactive Page transition wrapper
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Utility hook to check for viewport width
│   │   └── use-toast.ts            # Hook interface for managing UI notifications
│   └── lib/                        # Shared helper functions and configurations
│       └── utils.ts                # Tailwind class merging utility
├── .env.local.example              # Environment variables template
├── .gitignore                      # Specified files/directories ignored by git
├── AGENTS.md                       # Workspace system agent rules
├── CLAUDE.md                       # Developer checklist notes
├── eslint.config.mjs               # ESLint code linting configurations
├── next.config.ts                  # Next.js bundler and compilation configurations
├── package.json                    # Dependency listings and start scripts
├── postcss.config.mjs              # PostCSS plugin settings
├── tsconfig.json                   # TypeScript configuration rules
└── README.md                       # Project documentation (This file)
```

---

## 🛠️ Tech Stack & Key Dependencies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using PostCSS)
- **Animations**: [Framer Motion v12](https://www.framer.com/motion/)
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Database ORM**: [Prisma](https://www.prisma.io/) (PostgreSQL client)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.dev/)

---

## 🚀 Getting Started & Local Development

### 1. Clone & Install Dependencies
Install all package dependencies using `--legacy-peer-deps` (needed for peer dependencies in React 19):
```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment Variables
Create a `.env.local` file by copying the template:
```bash
cp .env.local.example .env.local
```
Update your `.env.local` with your database credentials:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/sarthak_dev_studio?schema=public"
```

### 3. Initialize the Database
Ensure your local or cloud PostgreSQL database is running, then apply the Prisma schema migration:
```bash
npx prisma db push
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
