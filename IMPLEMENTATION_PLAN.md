# Amal Library Website - Implementation Plan
**Project:** Modern Library Portal with Fumadocs + Keystatic  
**Client:** Amal College of Advanced Studies Library, Nilambur  
**Date:** January 28, 2026  
**Status:** Planning Phase

---

## 📋 Executive Summary

### Current State
- **Platform:** Blogger (Simple theme by DOLAB)
- **Problem:** Messy, hard to update, requires HTML/XML editing
- **Backend:** Koha ILMS + DSpace digital library (automated)
- **URL:** amallib.blogspot.com
- **Live OPAC:** http://library.amalvle.com/cgi-bin/koha/opac-main.pl

### Target State
- **Platform:** Next.js 16 + Fumadocs + Keystatic CMS
- **Admin:** `/admin` dashboard for librarian (no-code editing)
- **Hosting:** Vercel (zero cost, auto-deploy)
- **Content:** MDX files in Git (version controlled)
- **Update Time:** 1-2 minutes from admin edit to live

### Key Benefits
- ✅ **Non-technical admin:** WordPress-like editor for librarian
- ✅ **Modern design:** Clean, fast, mobile-optimized
- ✅ **Better organization:** Folder-based structure
- ✅ **Built-in search:** Full-text with filters
- ✅ **Auto-deploy:** Commit → Vercel → Live
- ✅ **Zero cost:** Open source stack, free hosting

---

## 🎯 Project Requirements

### Functional Requirements

#### 1. Content Management
| Requirement | Priority | Notes |
|------------|----------|-------|
| Question Bank (UG 6 sem + PG 4 sem) | **CRITICAL** | Google Drive links organized by semester/dept |
| Digital Resources (E-Books, E-Journals, etc.) | **HIGH** | External links, categorized |
| Blog Posts (New Arrivals, Events, Workshops) | **HIGH** | Rich text editor, images, YouTube embeds |
| Department Pages (6 departments) | **MEDIUM** | Static/semi-static content |
| Research Databases (Springer, JSTOR, etc.) | **HIGH** | External links with descriptions |
| Career Services (NET, SET, PSC, K-TET) | **MEDIUM** | External exam resource links |
| Downloads (Membership forms) | **MEDIUM** | PDF storage or Google Drive links |
| Photo/Video Galleries | **LOW** | Can use external service initially |
| Ask Librarian Form | **MEDIUM** | Contact form integration |

#### 2. Admin Requirements
- Single user (Head Librarian initially)
- Simple forms for adding content (no markdown knowledge needed)
- WYSIWYG editor for rich content
- Image upload support
- Preview before publish
- GitHub authentication (or alternative)

#### 3. Integration Requirements
| System | Type | Priority | Notes |
|--------|------|----------|-------|
| **Koha OPAC** | iFrame/Link | **CRITICAL** | http://library.amalvle.com (preserve existing) |
| **DSpace** | Link | **HIGH** | Digital repository software |
| **Google Drive** | Links | **CRITICAL** | Question bank folders (10 folders documented) |
| **YouTube** | Embed | **MEDIUM** | Tutorial videos (e.g., NLIST access) |
| **INFLIBNET N-List** | Link + SSO | **HIGH** | Research database access |
| **External DBs** | Links | **HIGH** | Springer, Elsevier, JSTOR, Oxford |

#### 4. User Experience Requirements
- Mobile responsive (current Blogger site is mobile-friendly)
- Fast loading (Next.js optimization)
- Search functionality (built into Fumadocs)
- Clear navigation (sidebar + top nav)
- Breadcrumbs for deep pages
- Working hours display (8:30 AM - 5:00 PM)

---

## 🏗️ Technical Architecture

### Stack Selection

```
┌─────────────────────────────────────────┐
│         Frontend & Routing              │
│   Next.js 16 (App Router) + React 19   │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│      Documentation Framework            │
│   Fumadocs (UI Kit + Core + MDX)        │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│        Content Management               │
│   Keystatic (Git-based Headless CMS)    │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│         Content Storage                 │
│   MDX Files in Git (content/docs/)      │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│        Deployment & Hosting             │
│   Vercel (Auto-deploy on Git push)      │
└─────────────────────────────────────────┘

External Integrations:
├── Koha OPAC (existing system)
├── DSpace (existing digital library)
└── Google Drive (question bank storage)
```

### File Structure

```
library/
├── content/
│   └── docs/
│       ├── index.mdx                      # Homepage
│       ├── about.mdx                      # About library
│       │
│       ├── digital-resources/
│       │   ├── index.mdx
│       │   ├── e-books.mdx
│       │   ├── e-journals.mdx
│       │   ├── e-newspapers.mdx
│       │   ├── academic-support.mdx
│       │   └── multimedia.mdx
│       │
│       ├── question-bank/
│       │   ├── index.mdx
│       │   ├── ug/
│       │   │   ├── semester-1.mdx
│       │   │   ├── semester-2.mdx
│       │   │   ├── ... (through 6)
│       │   │   └── semester-6.mdx
│       │   └── pg/
│       │       ├── semester-1.mdx
│       │       ├── semester-2.mdx
│       │       ├── semester-3.mdx
│       │       └── semester-4.mdx
│       │
│       ├── research-databases/
│       │   ├── index.mdx
│       │   ├── inflibnet-nlist.mdx
│       │   ├── springer.mdx
│       │   ├── jstor.mdx
│       │   ├── elsevier.mdx
│       │   └── oxford.mdx
│       │
│       ├── career-services/
│       │   ├── index.mdx
│       │   ├── nta-net.mdx
│       │   ├── set-exam.mdx
│       │   ├── civil-service.mdx
│       │   ├── psc-kerala.mdx
│       │   └── k-tet.mdx
│       │
│       ├── departments/
│       │   ├── index.mdx
│       │   ├── english.mdx
│       │   ├── commerce-management.mdx
│       │   ├── economics.mdx
│       │   ├── psychology.mdx
│       │   ├── computer-science.mdx
│       │   └── hotel-tourism.mdx
│       │
│       ├── downloads/
│       │   ├── index.mdx
│       │   ├── student-membership.mdx
│       │   └── staff-membership.mdx
│       │
│       └── updates/                       # Blog section
│           ├── 2026-01-new-arrivals.mdx
│           ├── 2025-07-fdp-workshop.mdx
│           └── ... (blog posts)
│
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   └── page.tsx                   # Landing page
│   │   ├── docs/
│   │   │   └── [[...slug]]/
│   │   │       └── page.tsx               # Main docs renderer
│   │   ├── admin/
│   │   │   └── [[...params]]/
│   │   │       └── page.tsx               # Keystatic admin UI
│   │   ├── api/
│   │   │   └── search/
│   │   │       └── route.ts               # Search endpoint
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── koha-opac-embed.tsx            # Koha catalog integration
│   │   ├── resource-card.tsx              # Resource display cards
│   │   ├── department-card.tsx            # Department pages
│   │   ├── question-bank-list.tsx         # Question bank semester list
│   │   ├── youtube-embed.tsx              # Tutorial videos
│   │   └── library-hours.tsx              # Hours display
│   │
│   └── lib/
│       ├── source.ts                      # Content source config
│       └── keystatic-config.ts            # CMS config
│
├── keystatic.config.ts                    # Keystatic schema definitions
├── source.config.ts                       # Fumadocs MDX config
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

---

## 📐 Content Schema Design (Keystatic)

### Collection 1: Resource Links
**Use:** Digital resources, research databases, career services

```typescript
{
  slug: string,                            // URL-friendly identifier
  title: string,                           // "INFLIBNET N-List"
  category: select([
    "Digital Resource",
    "Research Database", 
    "Career Service",
    "External Tool"
  ]),
  description: text (multiline),           // Rich description
  url: string,                             // External URL
  icon: image (optional),                  // Display icon/logo
  featured: boolean,                       // Show on homepage
  accessType: select([
    "Free",
    "Institutional Login",
    "Registration Required"
  ]),
  instructions: document (rich text),      // How to access (optional)
  relatedResources: relationship (array),  // Link to other resources
  order: number                            // Display order
}
```

### Collection 2: Question Bank Entries
**Use:** Semester-wise exam papers organized by level and department

```typescript
{
  slug: string,                            // "ug-english-sem3-2024"
  title: string,                           // "English Literature - Semester 3"
  level: select(["UG", "PG"]),
  semester: select([1, 2, 3, 4, 5, 6]),
  department: select([
    "English",
    "Commerce & Management",
    "Economics",
    "Psychology",
    "Computer Science",
    "Hotel & Tourism",
    "All Departments"
  ]),
  academicYear: string,                    // "2023-24"
  examType: select([
    "University Exam",
    "Model Papers",
    "Previous Year",
    "Practice Set"
  ]),
  googleDriveLink: string,                 // Link to folder/file
  alternateLink: string (optional),        // Telegram/backup link
  fileCount: number (optional),            // How many papers
  lastUpdated: date,                       // Auto-tracked
  notes: text (optional)                   // Additional info
}
```

### Collection 3: Blog Posts / Updates
**Use:** New arrivals, events, workshops, tutorials

```typescript
{
  slug: string,                            // "new-arrivals-january-2026"
  title: string,                           // "New Arrivals - January 2026"
  type: select([
    "New Arrivals",
    "Event",
    "Workshop",
    "Seminar",
    "Tutorial",
    "Announcement"
  ]),
  publishDate: date,                       // Publication date
  author: string (default: "Head Librarian"),
  summary: text,                           // Brief description
  content: document (rich text),           // Main content (WYSIWYG)
  featuredImage: image (optional),         // Header image
  gallery: array of images (optional),     // Photo gallery
  youtubeVideoId: string (optional),       // For tutorial embeds
  attachments: array of files (optional),  // PDFs, etc.
  tags: array of strings,                  // ["Books", "Psychology"]
  featured: boolean,                       // Show on homepage
  relatedPosts: relationship (array)       // Link to related posts
}
```

### Collection 4: Department Pages
**Use:** Static/semi-static information about each department

```typescript
{
  slug: string,                            // "computer-science"
  name: string,                            // "Computer Science"
  description: document (rich text),       // Department overview
  headOfDepartment: string (optional),     // Name
  contactEmail: string (optional),
  coursesOffered: array of strings,        // ["BCA", "MCA"]
  facultyCount: number (optional),
  studentCount: number (optional),
  specializations: array of strings,       // Research areas
  featuredImage: image (optional),         // Department photo
  resources: document (rich text),         // Department-specific resources
  questionBankLink: string (optional),     // Link to question bank page
  order: number                            // Display order in nav
}
```

### Collection 5: Static Pages
**Use:** About, Contact, Downloads, etc.

```typescript
{
  slug: string,                            // "about"
  title: string,                           // "About Amal Library"
  content: document (rich text),           // Page content
  sidebar: boolean,                        // Show sidebar navigation
  lastModified: date,                      // Auto-tracked
  metaDescription: string                  // SEO
}
```

---

## 🎨 Design System

### Color Palette (from NotebookLM research)
```css
--primary-burgundy: #681e26;          /* Headers, accents */
--secondary-olive: #4a6741;      /* Welcome messages */

--accent-gold: #b08d55;          /* OPAC branding */
--bg-light: #f8f9fa;             /* Page background */
--bg-white: #ffffff;             /* Content cards */
--text-dark: #212529;            /* Body text */
--text-muted: #6c757d;           /* Secondary text */
--border-light: #dee2e6;         /* Dividers */
```

### Typography
```css
/* Headers - Serif (academic formality) */
--font-heading: 'Georgia', 'Times New Roman', serif;

/* Body - Sans-serif (readability) */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Code/Technical */
--font-mono: 'JetBrains Mono', 'Consolas', monospace;
```

### Component Patterns
- **Resource Cards:** Icon + Title + Description + CTA button
- **Question Bank:** Accordion/tabs by semester, table layout
- **Blog Posts:** Card grid with image, date, title, excerpt
- **Department Cards:** Logo + Name + Stats + Link
- **Navigation:** Sidebar (desktop) + hamburger (mobile)

---

## 🚀 Implementation Phases

### Phase 1: Foundation Setup (Days 1-3)
**Goal:** Get basic Fumadocs + Keystatic running

#### Tasks:
- [x] Initialize Next.js 16 project (already done)
- [x] Install Fumadocs packages (already done)
- [ ] Install Keystatic packages
  ```bash
  pnpm add @keystatic/core @keystatic/next
  ```
- [ ] Create `keystatic.config.ts` with basic schema
- [ ] Setup admin route at `/admin`
- [ ] Configure authentication (GitHub OAuth recommended)
- [ ] Test admin UI locally

#### Deliverables:
- Working `/admin` dashboard
- Can create/edit test content
- Preview changes before commit

---

### Phase 2: Content Schema Implementation (Days 4-6)
**Goal:** Define all content types in Keystatic

#### Tasks:
- [ ] Implement Resource Links collection
- [ ] Implement Question Bank collection
- [ ] Implement Blog Posts collection
- [ ] Implement Department Pages collection
- [ ] Implement Static Pages collection
- [ ] Test each schema with sample data
- [ ] Validate field types and constraints
- [ ] Setup default values and placeholders

#### Deliverables:
- 5 fully functional content collections
- Admin forms for each type
- Sample data for testing

---

### Phase 3: Folder Structure & Initial Content (Days 7-9)
**Goal:** Create organized folder hierarchy and migrate critical content

#### Tasks:
- [ ] Create folder structure in `content/docs/`
- [ ] Setup navigation configuration in Fumadocs
- [ ] Migrate Question Bank links (10 Google Drive folders)
  - UG Semesters 1-6
  - PG Semesters 1-4
- [ ] Migrate Digital Resources links
  - E-Books
  - E-Journals
  - E-Newspapers
  - Academic Support
  - Multimedia
- [ ] Migrate Research Database links
  - INFLIBNET N-List (with tutorial video)
  - Springer, JSTOR, Elsevier, Oxford
- [ ] Migrate Career Services links
  - NTA-NET, SET-EXAM, Civil Service, PSC Kerala, K-TET
- [ ] Create department pages (6 departments)
- [ ] Setup Downloads section (membership forms)

#### Deliverables:
- Complete folder hierarchy
- All external links migrated
- Navigation working end-to-end

---

### Phase 4: Custom Components (Days 10-13)
**Goal:** Build reusable components for better UX

#### Tasks:
- [ ] **Homepage Component**
  - Hero section with library info
  - Working hours display (8:30 AM - 5:00 PM)
  - Featured resources grid
  - Recent updates feed
  - Quick links section
  
- [ ] **Koha OPAC Integration**
  - iFrame embed component
  - Or styled link button to `library.amalvle.com`
  
- [ ] **Question Bank Component**
  - Semester tabs (UG/PG toggle)
  - Department filter dropdown
  - Table view with download links
  - Last updated timestamps
  
- [ ] **Resource Card Component**
  - Icon/logo display
  - Title + description
  - Access type badge (Free/Login Required)
  - CTA button with external link icon
  
- [ ] **Blog Posts Grid**
  - Card layout with images
  - Category badges
  - Date formatting
  - Pagination
  
- [ ] **YouTube Embed Component**
  - Responsive video player
  - Thumbnail preview
  - Privacy-enhanced mode
  
- [ ] **Department Card Component**
  - Department icon/image
  - Name + description
  - Stats (courses, faculty)
  - Link to full page
  
- [ ] **Search Enhancement**
  - Custom filters (by category, department)
  - Search result highlighting
  - "No results" state with suggestions

#### Deliverables:
- 8+ reusable React components
- Styled with Tailwind CSS
- Mobile responsive
- Documented props

---

### Phase 5: Blog Content Migration (Days 14-16)
**Goal:** Migrate existing blog posts from Blogger

#### Tasks:
- [ ] Extract blog post data from current Blogger site
  - New Arrivals (book lists)
  - Events & Workshops (FDP July 2021, Conference Feb 2017)
  - Tutorials (NLIST access video)
- [ ] Recreate posts in Keystatic admin
- [ ] Upload images to project
- [ ] Embed YouTube tutorial video
- [ ] Test blog archive functionality
- [ ] Setup blog RSS feed (optional)

#### Deliverables:
- All historical blog posts migrated
- Working blog section with search/filter
- Archive by year/month

---

### Phase 6: Advanced Features (Days 17-19)
**Goal:** Add polish and advanced functionality

#### Tasks:
- [ ] **Advanced Search**
  - Filter by content type
  - Filter by department/semester
  - Filter by date range
  - Sort options
  
- [ ] **Ask Librarian Form**
  - Contact form component
  - Email integration (Formspree/Sendgrid/Resend)
  - Form validation
  - Success/error messages
  
- [ ] **Photo Gallery** (if time permits)
  - Image grid layout
  - Lightbox modal
  - Image optimization
  - Or link to external service (Google Photos)
  
- [ ] **Announcements System**
  - Marquee or banner for urgent updates
  - Dismissible notifications
  - Admin control via Keystatic
  
- [ ] **Breadcrumbs**
  - Show current page path
  - Clickable navigation trail
  
- [ ] **Table of Contents**
  - Auto-generate from headings
  - Sticky sidebar on long pages

#### Deliverables:
- Enhanced search functionality
- Contact form working
- Navigation improvements

---

### Phase 7: Styling & Branding (Days 20-22)
**Goal:** Apply college branding and polish design

#### Tasks:
- [ ] Implement color palette (red/green/blue theme)
- [ ] Add college logo to header
- [ ] Style typography (serif headings, sans-serif body)
- [ ] Design custom homepage layout
- [ ] Add footer with:
  - College credentials (NAAC A-grade, Calicut affiliation)
  - Library hours
  - Contact info
  - Social media links
  - Copyright notice
- [ ] Mobile responsive testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility audit (keyboard nav, screen readers)
- [ ] Performance optimization
  - Image compression
  - Lazy loading
  - Code splitting

#### Deliverables:
- Fully branded website
- Mobile responsive
- Accessible (WCAG 2.1 AA)
- Fast loading (<3s FCP)

---

### Phase 8: Admin Training & Documentation (Days 23-24)
**Goal:** Prepare librarian to manage content independently

#### Tasks:
- [ ] Create admin user guide
  - How to login
  - How to add Question Bank entries
  - How to add Blog posts
  - How to update Resource links
  - How to edit Department pages
  - How to preview changes
  - How to publish (commit)
- [ ] Record video tutorials (5-10 min each)
  - "Adding a new book arrival post"
  - "Updating question bank links"
  - "Creating an event post with photos"
- [ ] Create troubleshooting guide
- [ ] Setup support channel (email/WhatsApp)
- [ ] Live training session with librarian (1 hour)

#### Deliverables:
- Written user guide (PDF)
- 3+ video tutorials
- Trained librarian

---

### Phase 9: Deployment & Migration (Days 25-27)
**Goal:** Go live with new site

#### Tasks:
- [ ] **Pre-deployment checklist**
  - All content migrated ✓
  - All links tested ✓
  - SEO metadata added ✓
  - Analytics setup (Google Analytics/Plausible)
  - Sitemap generated
  - Robots.txt configured
  
- [ ] **Vercel Deployment**
  - Connect GitHub repo to Vercel
  - Configure environment variables
  - Setup custom domain (if available)
  - Enable automatic deployments
  - Configure preview deployments
  
- [ ] **Domain Migration** (if changing domain)
  - 301 redirects from old Blogger URLs
  - Update DNS records
  - SSL certificate setup (automatic in Vercel)
  
- [ ] **Testing on Production**
  - Full site walkthrough
  - Test all external links
  - Test forms (Ask Librarian)
  - Test admin access
  - Mobile testing
  
- [ ] **Backup Strategy**
  - Git repo = content backup ✓
  - Regular exports from Keystatic
  - Database backup plan (if using external DB)
  
- [ ] **Monitoring Setup**
  - Uptime monitoring (UptimeRobot/Pingdom)
  - Error tracking (Sentry optional)
  - Analytics dashboard

#### Deliverables:
- Live production site
- Domain configured
- Monitoring active
- Backup strategy documented

---

### Phase 10: Post-Launch Support (Days 28-30)
**Goal:** Ensure smooth transition and address issues

#### Tasks:
- [ ] Monitor for errors/issues (first 3 days critical)
- [ ] Gather feedback from librarian
- [ ] Gather feedback from students/faculty (if possible)
- [ ] Address any bugs or UX issues
- [ ] Performance tuning based on real usage
- [ ] Create feature request backlog
- [ ] Plan for future enhancements:
  - Institutional Repository integration (marked "coming soon")
  - Photo/video gallery improvements
  - User authentication for students (if needed)
  - Book reservation system (Koha integration)
  - Analytics dashboard for librarian

#### Deliverables:
- Stable production site
- Bug fixes deployed
- Future roadmap documented

---

## 📊 Success Metrics

### Technical Metrics
| Metric | Target | Current (Blogger) |
|--------|--------|-------------------|
| Page Load Time | <2s | ~4-5s |
| Mobile Performance Score | >90 | ~60-70 |
| Accessibility Score | >90 (WCAG AA) | ~70 |
| SEO Score | >90 | ~75 |
| Uptime | 99.9% | ~99% |

### User Experience Metrics
| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Time to add blog post | <5 min | Librarian feedback |
| Admin training time | <2 hours | Training session |
| Student satisfaction | >80% positive | Survey (optional) |
| Mobile usage | >50% of traffic | Analytics |

### Business Metrics
| Metric | Target |
|--------|--------|
| Total project cost | ₹0 (DIY) or ₹X (paid project) |
| Ongoing hosting cost | ₹0/month (Vercel free tier) |
| Admin time savings | 50% reduction in update time |
| Content updates frequency | 2-3x increase |

---

## ⚠️ Risks & Mitigation

### Risk 1: External Link Rot
**Problem:** 15+ external links (government portals, databases) may change URLs  
**Impact:** Broken links, frustrated users  
**Mitigation:**
- Quarterly link validation script
- Display last-checked date on resource pages
- Provide alternative contact methods

### Risk 2: Koha/DSpace Integration
**Problem:** Existing Koha OPAC may have integration challenges  
**Impact:** Library catalog not accessible  
**Mitigation:**
- Start with simple iFrame embed or direct link
- Explore API integration in Phase 2 (if API available)
- Maintain existing Koha URL as primary

### Risk 3: Librarian Tech Comfort
**Problem:** Librarian may struggle with new admin interface  
**Impact:** Slow adoption, continued manual updates  
**Mitigation:**
- Extensive training (written + video + live)
- Simplified UI with clear labels/instructions
- Ongoing support channel
- Start with small content updates to build confidence

### Risk 4: Content Migration Completeness
**Problem:** May miss content during migration from Blogger  
**Impact:** Missing information, incomplete site  
**Mitigation:**
- Complete crawl of existing Blogger site
- Checklist of all pages/posts
- Side-by-side comparison before launch
- Keep Blogger site archived for reference

### Risk 5: Academic Calendar Conflicts
**Problem:** Launch during exam period may be disruptive  
**Impact:** Student complaints, admin stress  
**Mitigation:**
- Plan launch during vacation/break
- Maintain Blogger site in parallel initially
- Gradual rollout (soft launch → full launch)

### Risk 6: Free Tier Limitations
**Problem:** Vercel free tier has limits (build minutes, bandwidth)  
**Impact:** Site down if limits exceeded  
**Mitigation:**
- Monitor usage closely
- Optimize assets (images, code)
- Upgrade to pro tier if needed (still cheap ~$20/mo)

---

## 🛠️ Technical Decisions & Rationale

### Why Fumadocs?
- ✅ Built for documentation/content-heavy sites (perfect fit)
- ✅ Excellent search out of the box
- ✅ Clean, academic-looking UI
- ✅ MDX support (embed components)
- ✅ Built on Next.js (modern, fast)
- ❌ Not a traditional CMS (but Keystatic solves this)

### Why Keystatic?
- ✅ Git-based (content is version controlled)
- ✅ Beautiful admin UI (WordPress-like)
- ✅ Open source (no vendor lock-in)
- ✅ Works with MDX files (matches Fumadocs)
- ✅ Free forever (no hosting costs)
- ❌ Single user by default (but only 1 librarian needs access)

### Why Not WordPress?
- ❌ Requires PHP hosting (costs money)
- ❌ Security maintenance burden
- ❌ Plugin updates needed
- ❌ Slower performance
- ✅ Librarian might already know it (valid concern)
  - **Counter:** Keystatic UI is similarly intuitive

### Why Not Notion + Super.so?
- ❌ Less customization control
- ❌ Notion branding on free tier
- ❌ Limited component flexibility
- ✅ Easier for non-technical (valid)
  - **Counter:** Since you're getting paid, custom solution adds value

### Why Not Keep Blogger?
- ❌ Requires XML/HTML editing
- ❌ Outdated design
- ❌ Limited customization
- ❌ Blogger platform may shut down eventually
- ✅ Free and familiar (but pain points outweigh benefits)

---

## 💰 Cost Analysis

### Current Blogger Setup
| Item | Cost |
|------|------|
| Blogger hosting | ₹0 |
| Domain (if custom) | ₹500-1000/year |
| **Total** | **₹500-1000/year** |

### New Fumadocs Setup
| Item | Cost |
|------|------|
| Next.js (self-hosted) | ₹0 (open source) |
| Fumadocs (framework) | ₹0 (open source) |
| Keystatic (CMS) | ₹0 (open source) |
| Vercel hosting | ₹0 (free tier: 100GB bandwidth/month) |
| GitHub (repo) | ₹0 (free for public repos) |
| Domain | ₹500-1000/year (same) |
| **Total** | **₹500-1000/year** |

### If Needs Exceed Free Tier
| Item | Cost |
|------|------|
| Vercel Pro | ~₹1600/month (~$20/month) |
| GitHub Pro | ₹320/month (~$4/month) |
| **Total** | **₹1920/month** (unlikely for college library traffic) |

### Development Cost (If Paid Project)
| Phase | Hours | Rate (₹) | Cost |
|-------|-------|----------|------|
| Planning & Research | 8 hrs | 500-1000 | ₹4,000-8,000 |
| Development (Phases 1-7) | 60-80 hrs | 500-1000 | ₹30,000-80,000 |
| Training & Documentation | 8 hrs | 500-1000 | ₹4,000-8,000 |
| Deployment & Support | 8 hrs | 500-1000 | ₹4,000-8,000 |
| **Total** | **84-104 hrs** | - | **₹42,000-₹1,04,000** |

*Note: Adjust rates based on your region and experience level*

---

## 📅 Timeline Summary

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| 1. Foundation Setup | 3 days | None |
| 2. Content Schema | 3 days | Phase 1 |
| 3. Folder Structure & Content | 3 days | Phase 2 |
| 4. Custom Components | 4 days | Phase 3 |
| 5. Blog Migration | 3 days | Phase 4 |
| 6. Advanced Features | 3 days | Phase 4 |
| 7. Styling & Branding | 3 days | Phase 5, 6 |
| 8. Admin Training | 2 days | Phase 7 |
| 9. Deployment | 3 days | Phase 8 |
| 10. Post-Launch Support | 3 days | Phase 9 |
| **Total** | **30 days** | - |

**Full-time:** 4-6 weeks  
**Part-time (2-3 hrs/day):** 2-3 months  
**Weekend-only:** 3-4 months

---

## 📝 Next Steps

### Immediate Actions (This Week)
1. [ ] **Get stakeholder approval**
   - Share this document with librarian/principal
   - Gather feedback on requirements
   - Confirm timeline expectations

2. [ ] **Setup development environment**
   - Ensure Node.js 18+ installed
   - Clone existing Fumadocs repo
   - Install Keystatic packages

3. [ ] **Gather assets**
   - College logo (high resolution)
   - Official color codes (if available)
   - Example content for testing
   - Access to Google Drive folders (question banks)

4. [ ] **Clarify integrations**
   - Koha OPAC admin access (if available)
   - DSpace details (if deeper integration needed)
   - Email service for contact form

### Phase 1 Kickoff (Next Week)
- [ ] Start implementation tasks from Phase 1
- [ ] Daily progress updates
- [ ] Weekly demo to stakeholders

---

## 📞 Support & Maintenance Plan

### Post-Launch Support (First 3 Months)
- **Week 1-2:** Daily monitoring, immediate bug fixes
- **Week 3-4:** Every-other-day check-ins
- **Month 2-3:** Weekly check-ins
- **After 3 months:** Monthly check-ins or on-demand

### Ongoing Maintenance Tasks
| Task | Frequency | Time Required |
|------|-----------|---------------|
| Update dependencies | Quarterly | 1-2 hours |
| Validate external links | Quarterly | 1 hour |
| Content backup verification | Monthly | 30 min |
| Performance monitoring | Weekly | 15 min |
| Security updates | As needed | 1-2 hours |

### Future Enhancement Ideas
- **Institutional Repository:** Integrate when software is ready
- **Book Reservation System:** API integration with Koha
- **Student Portal:** Login for personalized experience
- **Analytics Dashboard:** Usage stats for librarian
- **Mobile App:** PWA or native app (low priority)
- **Multi-language:** Malayalam + English versions
- **Chat Support:** Live chat for "Ask Librarian"

---

## 🎓 Learning Resources (For Developer)

### Fumadocs Documentation
- Official Docs: https://fumadocs.dev/
- GitHub: https://github.com/fuma-nama/fumadocs
- Examples: https://fumadocs.dev/docs/ui/examples

### Keystatic Documentation
- Official Docs: https://keystatic.com/docs
- GitHub: https://github.com/Thinkmill/keystatic
- Video Tutorials: YouTube search "Keystatic CMS"

### Next.js Resources
- App Router: https://nextjs.org/docs/app
- Deployment: https://vercel.com/docs

### MDX Resources
- MDX Docs: https://mdxjs.com/
- Unified Ecosystem: https://unifiedjs.com/

---

## 📄 Appendix

### A. Google Drive Question Bank Folder IDs
*(From NotebookLM research - to be populated with actual IDs)*

| Level | Semester | Department | Folder ID |
|-------|----------|------------|-----------|
| UG | 1 | All | TBD |
| UG | 2 | All | TBD |
| UG | 3 | All | TBD |
| UG | 4 | All | TBD |
| UG | 5 | All | TBD |
| UG | 6 | All | TBD |
| PG | 1 | All | TBD |
| PG | 2 | All | TBD |
| PG | 3 | All | TBD |
| PG | 4 | All | TBD |

### B. External Resource Links
*(To be populated during migration)*

**Digital Resources:**
- E-Books: [URL]
- E-Journals: [URL]
- E-Newspapers: [URL]
- Academic Support: [URL]
- Multimedia: [URL]

**Research Databases:**
- INFLIBNET N-List: [URL]
- Springer: [URL]
- JSTOR: [URL]
- Elsevier: [URL]
- Oxford: [URL]

**Career Services:**
- NTA-NET: [URL]
- SET-EXAM: [URL]
- Civil Service: [URL]
- PSC Kerala: [URL]
- K-TET: [URL]

### C. College Credentials (For Footer)
```
Amal College of Advanced Studies
Nilambur, Kerala

Affiliation: University of Calicut
Accreditation: NAAC 'A' Grade
Status:
- Aided by Government of Kerala
- Recognised by UGC under sec 2(f) & 12(b)
- Minority Educational Institution

Library Hours: 8:30 AM - 5:00 PM
```

### D. Contact Information
```
Head of Library: [Name]
Email: [library@amalcollege.ac.in]
Phone: [+91-XXXX-XXXXXX]
Address: [Full address]
```

---

## ✅ Document Changelog

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-28 | 1.0 | Initial comprehensive plan | [Your Name] |

---

**End of Implementation Plan**

This document is a living document and will be updated as the project progresses.
For questions or clarifications, refer to NotebookLM "amal library" notebook or contact project lead.
