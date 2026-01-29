import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
    ? {
        kind: 'github',
        repo: `${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`,
      }
    : { kind: 'local' },

  collections: {
    resourceLinks: collection({
      label: 'Resource Links',
      slugField: 'title',
      path: 'content/resources/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Digital Resource', value: 'digital-resource' },
            { label: 'Research Database', value: 'research-database' },
            { label: 'Career Service', value: 'career-service' },
            { label: 'External Tool', value: 'external-tool' },
          ],
          defaultValue: 'digital-resource',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        url: fields.url({ label: 'URL' }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        accessType: fields.select({
          label: 'Access Type',
          options: [
            { label: 'Free', value: 'free' },
            { label: 'Institutional Login', value: 'institutional-login' },
            { label: 'Registration Required', value: 'registration-required' },
          ],
          defaultValue: 'free',
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    questionBank: collection({
      label: 'Question Bank',
      slugField: 'title',
      path: 'content/question-bank/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        level: fields.select({
          label: 'Level',
          options: [
            { label: 'UG', value: 'ug' },
            { label: 'PG', value: 'pg' },
          ],
          defaultValue: 'ug',
        }),
        semester: fields.select({
          label: 'Semester',
          options: [
            { label: 'Semester 1', value: '1' },
            { label: 'Semester 2', value: '2' },
            { label: 'Semester 3', value: '3' },
            { label: 'Semester 4', value: '4' },
            { label: 'Semester 5', value: '5' },
            { label: 'Semester 6', value: '6' },
          ],
          defaultValue: '1',
        }),
        department: fields.select({
          label: 'Department',
          options: [
            { label: 'English', value: 'english' },
            { label: 'Commerce & Management', value: 'commerce-management' },
            { label: 'Economics', value: 'economics' },
            { label: 'Psychology', value: 'psychology' },
            { label: 'Computer Science', value: 'computer-science' },
            { label: 'Hotel & Tourism', value: 'hotel-tourism' },
            { label: 'All Departments', value: 'all' },
          ],
          defaultValue: 'all',
        }),
        academicYear: fields.text({
          label: 'Academic Year',
          description: 'e.g., 2024-2025',
        }),
        examType: fields.select({
          label: 'Exam Type',
          options: [
            { label: 'University Exam', value: 'university-exam' },
            { label: 'Model Papers', value: 'model-papers' },
            { label: 'Previous Year', value: 'previous-year' },
            { label: 'Practice Set', value: 'practice-set' },
          ],
          defaultValue: 'previous-year',
        }),
        googleDriveLink: fields.url({
          label: 'Google Drive Link',
        }),
        notes: fields.text({
          label: 'Notes',
          multiline: true,
        }),
      },
    }),

    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        type: fields.select({
          label: 'Post Type',
          options: [
            { label: 'New Arrivals', value: 'new-arrivals' },
            { label: 'Event', value: 'event' },
            { label: 'Workshop', value: 'workshop' },
            { label: 'Seminar', value: 'seminar' },
            { label: 'Tutorial', value: 'tutorial' },
            { label: 'Announcement', value: 'announcement' },
          ],
          defaultValue: 'announcement',
        }),
        publishDate: fields.date({
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'Head Librarian',
        }),
        summary: fields.text({
          label: 'Summary',
          multiline: true,
        }),
        content: fields.mdx({
          label: 'Content',
        }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts',
        }),
        youtubeVideoId: fields.text({
          label: 'YouTube Video ID',
          description: 'Optional: Enter the YouTube video ID (e.g., dQw4w9WgXcQ)',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value || 'Tag',
          }
        ),
        featured: fields.checkbox({
          label: 'Featured Post',
          defaultValue: false,
        }),
      },
    }),

    departments: collection({
      label: 'Departments',
      slugField: 'name',
      path: 'content/departments/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Department Name' } }),
        description: fields.mdx({
          label: 'Description',
        }),
        coursesOffered: fields.array(
          fields.text({ label: 'Course' }),
          {
            label: 'Courses Offered',
            itemLabel: (props) => props.value || 'Course',
          }
        ),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Page Title' } }),
        content: fields.mdx({
          label: 'Content',
        }),
        lastModified: fields.date({
          label: 'Last Modified',
          defaultValue: { kind: 'today' },
        }),
      },
    }),

    careerExams: collection({
      label: 'Career & Exams',
      slugField: 'title',
      path: 'content/career-exams/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'NTA-NET', value: 'nta-net' },
            { label: 'SET', value: 'set' },
            { label: 'K-TET', value: 'k-tet' },
            { label: 'PSC Kerala', value: 'psc-kerala' },
            { label: 'Civil Services', value: 'civil-services' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'other',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        url: fields.url({ label: 'Resource URL' }),
        resourceType: fields.select({
          label: 'Resource Type',
          options: [
            { label: 'Study Material', value: 'study-material' },
            { label: 'Previous Papers', value: 'previous-papers' },
            { label: 'Mock Tests', value: 'mock-tests' },
            { label: 'Syllabus', value: 'syllabus' },
            { label: 'Notification', value: 'notification' },
            { label: 'External Link', value: 'external-link' },
          ],
          defaultValue: 'study-material',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    forms: collection({
      label: 'Forms & Downloads',
      slugField: 'title',
      path: 'content/forms/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Student Membership', value: 'student-membership' },
            { label: 'Staff Membership', value: 'staff-membership' },
            { label: 'Book Request', value: 'book-request' },
            { label: 'Inter-Library Loan', value: 'inter-library-loan' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'other',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        fileUrl: fields.url({ label: 'File Download URL' }),
        fileType: fields.select({
          label: 'File Type',
          options: [
            { label: 'PDF', value: 'pdf' },
            { label: 'Word Document', value: 'docx' },
            { label: 'Excel', value: 'xlsx' },
            { label: 'Online Form', value: 'online' },
          ],
          defaultValue: 'pdf',
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    researchAssist: collection({
      label: 'Research Assistance',
      slugField: 'title',
      path: 'content/research-assist/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        url: fields.url({ label: 'Resource URL' }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Library', value: 'library' },
            { label: 'Book', value: 'book' },
            { label: 'Search', value: 'search' },
            { label: 'Database', value: 'database' },
            { label: 'Video', value: 'video' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'link',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),
  },
});
