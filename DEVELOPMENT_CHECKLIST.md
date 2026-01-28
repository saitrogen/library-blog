# Amal Library - Development Checklist
**Quick Reference for Iterative Development**

Use this checklist to track progress through each phase. Check off items as completed.

---

## Phase 1: Foundation Setup (Days 1-3)

### Installation
- [x] Initialize Next.js 16 project
- [x] Install Fumadocs packages
- [x] Install Keystatic packages
  ```bash
  pnpm add @keystatic/core @keystatic/next
  ```

### Configuration
- [ ] Create `keystatic.config.ts`
- [ ] Setup admin route: `src/app/admin/[[...params]]/page.tsx`
- [ ] Configure GitHub OAuth authentication
- [ ] Test admin UI at `http://localhost:3000/admin`

### Validation
- [ ] Can access `/admin` successfully
- [ ] Can create test content
- [ ] Changes commit to Git

---

## Phase 2: Content Schema (Days 4-6)

### Collections to Implement
- [ ] **Resource Links** (`resourceLinks`)
  - Fields: title, category, description, url, icon, featured, accessType
  - Test: Create 3 sample resources
  
- [ ] **Question Bank** (`questionBank`)
  - Fields: title, level, semester, department, academicYear, googleDriveLink
  - Test: Add sample UG Sem 1 entry
  
- [ ] **Blog Posts** (`blogPosts`)
  - Fields: title, type, publishDate, content, featuredImage, youtubeVideoId
  - Test: Create sample "New Arrivals" post
  
- [ ] **Department Pages** (`departments`)
  - Fields: name, description, coursesOffered, resources
  - Test: Create Computer Science dept page
  
- [ ] **Static Pages** (`pages`)
  - Fields: slug, title, content
  - Test: Create "About" page

### Validation
- [ ] All 5 collections visible in admin
- [ ] Forms are user-friendly
- [ ] Preview works for each type
- [ ] Can edit and update entries

---

## Phase 3: Folder Structure & Content (Days 7-9)

### Folder Creation
- [ ] `content/docs/index.mdx` (Homepage)
- [ ] `content/docs/digital-resources/` (6 pages)
- [ ] `content/docs/question-bank/ug/` (6 semester pages)
- [ ] `content/docs/question-bank/pg/` (4 semester pages)
- [ ] `content/docs/research-databases/` (6 pages)
- [ ] `content/docs/career-services/` (5 pages)
- [ ] `content/docs/departments/` (6 dept pages)
- [ ] `content/docs/downloads/` (2 pages)
- [ ] `content/docs/updates/` (blog posts)

### Content Migration
- [ ] Question Bank: 10 Google Drive folder links
- [ ] Digital Resources: 5 category pages
- [ ] Research Databases: 5 major databases
- [ ] Career Services: 5 exam resources
- [ ] Department Pages: 6 departments
- [ ] Downloads: 2 membership forms

### Navigation
- [ ] Sidebar navigation auto-generated
- [ ] Test all internal links
- [ ] Breadcrumbs working

---

## Phase 4: Custom Components (Days 10-13)

### Core Components
- [ ] `components/koha-opac-embed.tsx`
  - iFrame or link to library.amalvle.com
  
- [ ] `components/resource-card.tsx`
  - Props: title, description, url, icon, accessType
  - Display: Card with CTA button
  
- [ ] `components/question-bank-list.tsx`
  - UG/PG toggle
  - Semester tabs
  - Table with download links
  
- [ ] `components/youtube-embed.tsx`
  - Responsive video player
  - Props: videoId
  
- [ ] `components/department-card.tsx`
  - Department info card
  - Link to full page
  
- [ ] `components/library-hours.tsx`
  - Display 8:30 AM - 5:00 PM
  - Maybe with current status (Open/Closed)

### Homepage Layout
- [ ] Hero section with library info
- [ ] Working hours display
- [ ] Featured resources grid (4-6 items)
- [ ] Recent updates feed (3-5 posts)
- [ ] Quick links section
- [ ] Call to action (Browse Catalog, Ask Librarian)

### Validation
- [ ] All components render correctly
- [ ] Mobile responsive
- [ ] No console errors

---

## Phase 5: Blog Content Migration (Days 14-16)

### Extract from Blogger
- [ ] "INFLIBNET N-List Tutorial" (July 2021)
  - YouTube video embed
- [ ] "New Arrivals" (June 2020)
  - 16 book titles list
- [ ] "Faculty Development Programme" (July 2021)
- [ ] "National Conference" (Feb 2017)

### Recreate in Keystatic
- [ ] Add posts via admin UI
- [ ] Upload images
- [ ] Embed videos
- [ ] Set publish dates

### Blog Features
- [ ] Blog post listing page
- [ ] Individual post pages
- [ ] Category filter
- [ ] Date archive
- [ ] Search integration

---

## Phase 6: Advanced Features (Days 17-19)

### Enhanced Search
- [ ] Filter by content type
- [ ] Filter by department
- [ ] Filter by semester (for question bank)
- [ ] Sort options
- [ ] Highlight search terms

### Contact Form
- [ ] "Ask Librarian" form component
- [ ] Fields: Name, Email, Subject, Message
- [ ] Email integration (choose one):
  - [ ] Formspree
  - [ ] Resend
  - [ ] SendGrid
- [ ] Form validation
- [ ] Success/error messages
- [ ] Thank you page

### Other Features
- [ ] Breadcrumbs component
- [ ] Table of contents (long pages)
- [ ] "Last updated" timestamps
- [ ] Print-friendly styles

---

## Phase 7: Styling & Branding (Days 20-22)

### Color Theme
- [ ] Define CSS variables:
  ```css
  --primary-red: #dc143c
  --secondary-green: #228b22
  --accent-blue: #4169e1
  ```
- [ ] Apply to components
- [ ] Test contrast ratios (WCAG AA)

### Typography
- [ ] Import Google Fonts (Georgia for headings)
- [ ] Set font-family variables
- [ ] Heading hierarchy (h1-h6)
- [ ] Body text sizing

### Logo & Assets
- [ ] Add college logo to header
- [ ] Favicon
- [ ] OG image for social sharing

### Footer
- [ ] College credentials
- [ ] Library hours
- [ ] Contact info
- [ ] Social media links
- [ ] Copyright notice

### Responsive Design
- [ ] Test on mobile (375px, 390px, 428px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Hamburger menu on mobile
- [ ] Touch-friendly buttons (48px min)

### Performance
- [ ] Optimize images (next/image)
- [ ] Lazy load images
- [ ] Code splitting
- [ ] Run Lighthouse audit (score >90)

### Accessibility
- [ ] Keyboard navigation
- [ ] Focus styles
- [ ] Alt text for images
- [ ] ARIA labels
- [ ] Screen reader testing

---

## Phase 8: Admin Training (Days 23-24)

### Documentation
- [ ] Write admin user guide (PDF)
  - [ ] Login instructions
  - [ ] Adding blog posts
  - [ ] Adding question bank entries
  - [ ] Updating resource links
  - [ ] Editing department pages
  - [ ] Preview before publish
  - [ ] Publishing changes

### Video Tutorials
- [ ] Record: "Adding a blog post" (5-10 min)
- [ ] Record: "Updating question bank" (5-10 min)
- [ ] Record: "Publishing changes" (3-5 min)

### Training Session
- [ ] Schedule 1-hour live session with librarian
- [ ] Walk through common tasks
- [ ] Answer questions
- [ ] Get feedback on UX

### Support
- [ ] Setup support channel (email/WhatsApp)
- [ ] Create FAQ document
- [ ] Troubleshooting guide

---

## Phase 9: Deployment (Days 25-27)

### Pre-Deployment
- [ ] All content migrated and verified
- [ ] All links tested (internal + external)
- [ ] SEO metadata on all pages
- [ ] Generate sitemap.xml
- [ ] Configure robots.txt
- [ ] Setup analytics (Google Analytics or Plausible)

### Vercel Setup
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables
- [ ] Enable auto-deploy on commit
- [ ] Setup preview deployments (PRs)
- [ ] Test preview deployment

### Domain Configuration
- [ ] Point domain to Vercel (if custom domain)
- [ ] Setup 301 redirects from Blogger URLs (if needed)
- [ ] Verify SSL certificate

### Production Testing
- [ ] Full site walkthrough
- [ ] Test all forms
- [ ] Test admin access from production
- [ ] Mobile testing on real devices
- [ ] Cross-browser testing

### Monitoring
- [ ] Setup uptime monitoring (UptimeRobot)
- [ ] Setup error tracking (optional: Sentry)
- [ ] Create analytics dashboard
- [ ] Document monitoring process

---

## Phase 10: Post-Launch (Days 28-30)

### Immediate Monitoring
- [ ] Day 1: Check for errors every 2-4 hours
- [ ] Day 2-3: Check twice daily
- [ ] Week 1: Daily check-ins with librarian

### Feedback Collection
- [ ] Librarian feedback on admin UX
- [ ] Student/faculty feedback (if possible)
- [ ] Identify pain points
- [ ] Create bug fix priority list

### Bug Fixes
- [ ] Critical issues (within 24 hours)
- [ ] High priority (within 3-5 days)
- [ ] Medium priority (within 1-2 weeks)
- [ ] Low priority (backlog)

### Performance Tuning
- [ ] Analyze real-world performance
- [ ] Optimize slow pages
- [ ] Review analytics data
- [ ] Adjust based on usage patterns

### Future Roadmap
- [ ] Document feature requests
- [ ] Prioritize enhancements
- [ ] Create GitHub issues for tracking
- [ ] Plan next iteration

---

## Key Milestones

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Admin UI Working | Day 3 | ⏳ Pending |
| Content Schema Complete | Day 6 | ⏳ Pending |
| All Content Migrated | Day 9 | ⏳ Pending |
| Components Built | Day 13 | ⏳ Pending |
| Blog Migrated | Day 16 | ⏳ Pending |
| Advanced Features Done | Day 19 | ⏳ Pending |
| Styling Complete | Day 22 | ⏳ Pending |
| Librarian Trained | Day 24 | ⏳ Pending |
| Site Deployed | Day 27 | ⏳ Pending |
| Post-Launch Stable | Day 30 | ⏳ Pending |

---

## Quick Commands

### Development
```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server locally
pnpm start

# Type checking
pnpm types:check

# Linting
pnpm lint
```

### Keystatic Admin
```bash
# Access admin UI
http://localhost:3000/admin

# Access after deployment
https://yourdomain.com/admin
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/phase-1-setup

# Commit changes
git add .
git commit -m "Phase 1: Setup Keystatic admin"

# Push to remote
git push origin feature/phase-1-setup

# Merge to main (triggers auto-deploy on Vercel)
git checkout main
git merge feature/phase-1-setup
git push origin main
```

---

## Progress Tracking

**Current Phase:** Planning Complete ✅  
**Next Phase:** Phase 1 - Foundation Setup  
**Overall Progress:** 0% (0/10 phases complete)

**Daily Log:** (Update as you work)
```
2026-01-28: Created implementation plan and checklist ✅
2026-01-29: [Start Phase 1]
2026-01-30: 
2026-01-31: 
...
```

---

## Notes & Blockers

### Current Blockers
- None (planning phase complete)

### Decisions Needed
- [ ] Confirm GitHub auth is acceptable for librarian
- [ ] Get college logo and branding assets
- [ ] Confirm Google Drive folder access
- [ ] Decide on email service for contact form

### Questions for Librarian
- [ ] Tech comfort level with GitHub login?
- [ ] Preferred timeline for launch?
- [ ] Any priority features to build first?
- [ ] Access to existing Blogger admin (for migration)?

---

**Last Updated:** 2026-01-28  
**Next Review:** After Phase 1 completion

Use this checklist daily to track progress and stay focused!
