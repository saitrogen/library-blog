import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

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
  },
});
