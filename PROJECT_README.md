# Amal Library Website Rebuild
**Modern Library Portal for Amal College of Advanced Studies**

> Replacing legacy Blogger site with Next.js + Fumadocs + Keystatic CMS

---

## 📚 Project Overview

### The Challenge
Amal College Library (Nilambur, Kerala) currently uses a Blogger-based website that is:
- Difficult to update (requires HTML/XML editing)
- Messy design and poor organization
- Not mobile-optimized
- Lacks proper content management

### The Solution
A modern, fast, easy-to-manage website built with:
- **Next.js 16** - Modern React framework
- **Fumadocs** - Documentation-focused UI (perfect for libraries)
- **Keystatic** - Git-based headless CMS (WordPress-like admin UI)
- **Vercel** - Zero-cost hosting with auto-deployment

### Key Features
- 📖 **Question Bank** - Semester-wise exam papers (UG 1-6, PG 1-4)
- 🔗 **Digital Resources** - E-Books, E-Journals, E-Newspapers
- 🔬 **Research Databases** - INFLIBNET, Springer, JSTOR, etc.
- 📰 **Blog/Updates** - New Arrivals, Events, Workshops
- 🏢 **Department Pages** - 6 academic departments
- 🔍 **Search** - Full-text search with filters
- 👤 **Admin Dashboard** - `/admin` for librarian (no coding required)

---

## 🎯 Target Users

### Primary User: Head Librarian
- **Needs:** Easy way to add/update content without coding
- **Tech Level:** Comfortable with Word/Excel, not a developer
- **Tasks:**
  - Publish blog posts (new book arrivals, events)
  - Update question bank links
  - Add/edit resource links
  - Manage department pages

### Secondary Users: Students & Faculty
- **Needs:** Quick access to resources, question papers, databases
- **Devices:** Primarily mobile (50%+), then desktop
- **Goals:**
  - Find question papers for upcoming exams
  - Access e-journals for research
  - Stay updated on new library resources

---

## 📂 Documentation Index

### For Developers
- [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md) - Complete technical implementation plan (30-day roadmap)
- [`DEVELOPMENT_CHECKLIST.md`](./DEVELOPMENT_CHECKLIST.md) - Phase-by-phase checklist for tracking progress
- [`README.md`](./README.md) - This file (project overview)

### For Librarian (To Be Created)
- `docs/ADMIN_GUIDE.pdf` - User guide for managing content
- `docs/VIDEO_TUTORIALS/` - Screen recordings of common tasks
- `docs/FAQ.md` - Frequently asked questions
- `docs/TROUBLESHOOTING.md` - Common issues and solutions

---

## 🗂️ Content Structure

```
Amal Library Website
│
├── 🏠 Home
│   ├── Welcome & Library Info
│   ├── Working Hours (8:30 AM - 5:00 PM)
│   ├── Featured Resources
│   └── Recent Updates
│
├── 📖 Digital Resources
│   ├── E-Books
│   ├── E-Journals
│   ├── E-Newspapers
│   ├── Academic Support
│   └── Multimedia
│
├── 🎓 Question Bank
│   ├── UG Students (Semester 1-6)
│   └── PG Students (Semester 1-4)
│
├── 🔬 Research Databases
│   ├── INFLIBNET N-List
│   ├── Springer
│   ├── JSTOR
│   ├── Elsevier
│   └── Oxford
│
├── 💼 Career Services
│   ├── NTA-NET
│   ├── SET-EXAM
│   ├── Civil Service
│   ├── PSC Kerala
│   └── K-TET
│
├── 🏢 Departments
│   ├── English
│   ├── Commerce & Management
│   ├── Economics
│   ├── Psychology
│   ├── Computer Science
│   └── Hotel & Tourism
│
├── 📰 Updates (Blog)
│   ├── New Arrivals
│   ├── Events & Workshops
│   └── Tutorials
│
├── 📥 Downloads
│   ├── Student Membership Form
│   └── Staff Membership Form
│
└── 👤 Admin Dashboard
    └── /admin (Librarian only)
```

---

## 🚀 Quick Start (Development)

### Prerequisites
- Node.js 18+ installed
- pnpm package manager
- Git

### Setup
```bash
# Clone repository
git clone <repo-url>
cd library

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
http://localhost:3000
```

### Access Admin UI
```bash
# While dev server is running
http://localhost:3000/admin

# First time setup will require GitHub OAuth
```

---

## 📋 Current Status

**Phase:** Planning Complete ✅  
**Next:** Phase 1 - Foundation Setup  
**Progress:** 0% (Planning done, implementation starting)

### Completed
- ✅ Requirements gathering
- ✅ Technical architecture design
- ✅ Implementation plan created
- ✅ Development checklist created
- ✅ NotebookLM research for existing site context

### In Progress
- ⏳ Phase 1: Foundation Setup (Keystatic installation)

### Upcoming
- 📅 Phase 2: Content Schema Implementation
- 📅 Phase 3: Content Migration
- 📅 Phase 4: Custom Components

---

## 🛠️ Tech Stack Details

### Core Framework
- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type safety

### Documentation Framework
- **Fumadocs Core 16.4.9** - Content management
- **Fumadocs MDX 14.2.6** - MDX processing
- **Fumadocs UI 16.4.9** - Pre-built UI components

### CMS (To Be Added)
- **Keystatic** - Git-based headless CMS
  - `@keystatic/core` - Core CMS logic
  - `@keystatic/next` - Next.js integration

### Styling
- **Tailwind CSS 4.x** - Utility-first CSS
- **PostCSS** - CSS processing
- **tailwind-merge** - Utility class merging

### Deployment
- **Vercel** - Hosting and CI/CD
- **GitHub** - Version control and content storage

---

## 🎨 Design System

### Colors (From College Branding)
```css
Primary :     #681e26 (Amal Burgundy)
Secondary : #4a6741 (Campus Olive)
Accent :     #b08d55 (Academic Gold)
Background:      #fdfcf8 (Warm Paper)
Text:            #212529 (Dark)
```

### Typography
- **Headings:** Georgia, Times New Roman (Serif - academic feel)
- **Body:** Inter, System Sans-serif (Clean, readable)
- **Code:** JetBrains Mono (Monospace)

### Component Patterns
- Resource cards with icons
- Question bank tables with filters
- Blog post grid with images
- Department cards with stats
- Responsive sidebar navigation

---

## 📊 Project Metrics

### Success Criteria
| Metric | Target | Current (Blogger) |
|--------|--------|-------------------|
| Page Load Time | <2s | ~4-5s |
| Mobile Score | >90 | ~60-70 |
| Accessibility | >90 | ~70 |
| Admin Update Time | <5 min | ~30 min |
| Content Updates/Month | 10+ | 2-3 |

### Timeline
- **MVP:** 2 weeks (basic functionality)
- **Full Featured:** 4-6 weeks (all features)
- **Post-Launch Support:** 1 month

### Budget
- **Development:** ₹0 (DIY) or ₹42,000-₹1,04,000 (paid)
- **Hosting:** ₹0/month (Vercel free tier)
- **Domain:** ₹500-1000/year (existing)
- **Total Ongoing Cost:** ~₹1000/year

---

## 🔗 Important Links

### Current Site
- **Blogger URL:** [amallib.blogspot.com](https://amallib.blogspot.com) (placeholder)
- **Koha OPAC:** http://library.amalvle.com/cgi-bin/koha/opac-main.pl

### Documentation
- **Fumadocs:** https://fumadocs.dev/
- **Keystatic:** https://keystatic.com/docs
- **Next.js:** https://nextjs.org/docs

### Project Management
- **NotebookLM Research:** "amal library" notebook
- **GitHub Repo:** [Your repo URL]
- **Vercel Dashboard:** [After deployment]

---

## 🤝 Team & Roles

### Primary Developer
- **Name:** [Your Name]
- **Role:** Full-stack development, deployment, training
- **Contact:** [Your email/WhatsApp]

### Stakeholders
- **Client:** Head Librarian, Amal College
- **Approval:** Library Advisory Committee (Principal as Chair)
- **End Users:** Students, Faculty, Staff

---

## 📝 Development Guidelines

### Git Workflow
```bash
# Feature branches for each phase
git checkout -b feature/phase-1-foundation
git checkout -b feature/phase-2-schema
# etc.

# Commit messages
git commit -m "Phase 1: Add Keystatic admin setup"

# Merge to main triggers auto-deploy
git checkout main
git merge feature/phase-1-foundation
```

### Code Standards
- TypeScript strict mode
- ESLint configuration (Next.js defaults)
- Component-driven architecture
- Accessibility-first (WCAG 2.1 AA)

### Testing Strategy
- Manual testing during development
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile device testing (real devices)
- Lighthouse audits (performance, accessibility)
- User acceptance testing with librarian

---

## ⚠️ Known Constraints

### Technical
- **Single User Admin:** Keystatic default (sufficient for 1 librarian)
- **External Links:** 15+ external resources may change URLs (need monitoring)
- **Koha Integration:** Simple link/iframe (API integration is Phase 2 enhancement)

### Timeline
- **Academic Calendar:** Avoid deploying during exam periods
- **Training Time:** Allocate 2-3 hours for librarian training
- **Feedback Loop:** Need time for content review and adjustments

### Budget
- **Zero-cost requirement:** Must stay within Vercel free tier
- **Future scaling:** May need paid tier if traffic exceeds 100GB/month (unlikely)

---

## 🎓 Learning Outcomes (For Developer)

This project provides hands-on experience with:
- ✅ Modern Next.js App Router architecture
- ✅ Headless CMS integration (Keystatic)
- ✅ Git-based content workflows
- ✅ Documentation site patterns (Fumadocs)
- ✅ Client communication and requirements gathering
- ✅ User training and documentation creation
- ✅ Real-world content migration
- ✅ Production deployment and monitoring

---

## 📞 Support & Contact

### For Development Questions
- Review [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)
- Check [`DEVELOPMENT_CHECKLIST.md`](./DEVELOPMENT_CHECKLIST.md)
- Query NotebookLM "amal library" notebook
- GitHub Issues (if repo is set up)

### For Librarian Support (Post-Launch)
- Admin Guide: `docs/ADMIN_GUIDE.pdf`
- Video Tutorials: `docs/VIDEO_TUTORIALS/`
- FAQ: `docs/FAQ.md`
- Direct Contact: [Your support email/WhatsApp]

---

## 📄 License

This project is built with open-source technologies:
- Next.js (MIT)
- Fumadocs (MIT)
- Keystatic (MIT)

Custom code for Amal College Library is proprietary unless otherwise specified.

---

## 🙏 Acknowledgments

- **Amal College of Advanced Studies** - Client and stakeholder
- **NotebookLM** - Research and context gathering
- **Fumadocs** - Documentation framework
- **Keystatic** - Headless CMS solution
- **Vercel** - Hosting platform

---

**Project Start Date:** January 28, 2026  
**Target Launch Date:** February 28, 2026 (flexible)  
**Last Updated:** January 28, 2026

---

## 🚦 Next Actions

1. ✅ Review this README
2. ✅ Read [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)
3. ⏳ Start Phase 1 from [`DEVELOPMENT_CHECKLIST.md`](./DEVELOPMENT_CHECKLIST.md)
4. ⏳ Install Keystatic packages
5. ⏳ Create admin route
6. ⏳ Test admin UI

**Ready to build!** 🚀
