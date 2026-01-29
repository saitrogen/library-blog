import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

/**
 * Keystatic Reader for accessing content from file system
 * Use this in Server Components to read content from Keystatic collections
 */
export const reader = createReader(process.cwd(), keystaticConfig);

// Type exports for collections
export type ResourceLink = Awaited<ReturnType<typeof reader.collections.resourceLinks.read>>;
export type QuestionBankEntry = Awaited<ReturnType<typeof reader.collections.questionBank.read>>;
export type Post = Awaited<ReturnType<typeof reader.collections.posts.read>>;
export type Department = Awaited<ReturnType<typeof reader.collections.departments.read>>;
export type Page = Awaited<ReturnType<typeof reader.collections.pages.read>>;
export type CareerExam = Awaited<ReturnType<typeof reader.collections.careerExams.read>>;
export type Form = Awaited<ReturnType<typeof reader.collections.forms.read>>;
export type ResearchAssist = Awaited<ReturnType<typeof reader.collections.researchAssist.read>>;

/**
 * Get all resource links
 */
export async function getAllResources() {
  const slugs = await reader.collections.resourceLinks.list();
  const resources = await Promise.all(
    slugs.map(async (slug) => {
      const resource = await reader.collections.resourceLinks.read(slug);
      return resource ? { slug, ...resource } : null;
    })
  );
  return resources.filter(Boolean).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
}

/**
 * Get a single resource by slug
 */
export async function getResource(slug: string) {
  return reader.collections.resourceLinks.read(slug);
}

/**
 * Get all question bank entries
 */
export async function getAllQuestionBankEntries() {
  const slugs = await reader.collections.questionBank.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.questionBank.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );
  return entries.filter(Boolean);
}

/**
 * Get question bank entries filtered by level and/or semester
 */
export async function getQuestionBankByFilter(level?: 'ug' | 'pg', semester?: string) {
  const entries = await getAllQuestionBankEntries();
  return entries.filter((entry) => {
    if (level && entry?.level !== level) return false;
    if (semester && entry?.semester !== semester) return false;
    return true;
  });
}

/**
 * Get all blog posts
 */
export async function getAllPosts() {
  const slugs = await reader.collections.posts.list();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      return post ? { slug, ...post } : null;
    })
  );
  return posts
    .filter(Boolean)
    .sort((a, b) => {
      const dateA = a?.publishDate ? new Date(a.publishDate).getTime() : 0;
      const dateB = b?.publishDate ? new Date(b.publishDate).getTime() : 0;
      return dateB - dateA; // Newest first
    });
}

/**
 * Get a single post by slug (with rendered content)
 */
export async function getPost(slug: string) {
  return reader.collections.posts.read(slug);
}

/**
 * Get featured posts
 */
export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => post?.featured);
}

/**
 * Get all departments
 */
export async function getAllDepartments() {
  const slugs = await reader.collections.departments.list();
  const departments = await Promise.all(
    slugs.map(async (slug) => {
      const department = await reader.collections.departments.read(slug);
      return department ? { slug, ...department } : null;
    })
  );
  return departments.filter(Boolean).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
}

/**
 * Get a single department by slug (with rendered content)
 */
export async function getDepartment(slug: string) {
  return reader.collections.departments.read(slug);
}

/**
 * Get all static pages
 */
export async function getAllPages() {
  const slugs = await reader.collections.pages.list();
  const pages = await Promise.all(
    slugs.map(async (slug) => {
      const page = await reader.collections.pages.read(slug);
      return page ? { slug, ...page } : null;
    })
  );
  return pages.filter(Boolean);
}

/**
 * Get a single static page by slug (with rendered content)
 */
export async function getPage(slug: string) {
  return reader.collections.pages.read(slug);
}

/**
 * Get featured resources
 */
export async function getFeaturedResources() {
  const resources = await getAllResources();
  return resources.filter((resource) => resource?.featured);
}

/**
 * Get all career exam resources
 */
export async function getAllCareerExams() {
  const slugs = await reader.collections.careerExams.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.careerExams.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );
  return entries.filter(Boolean).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
}

/**
 * Get career exams by category
 */
export async function getCareerExamsByCategory(category: string) {
  const entries = await getAllCareerExams();
  return entries.filter((entry) => entry?.category === category);
}

/**
 * Get all forms
 */
export async function getAllForms() {
  const slugs = await reader.collections.forms.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.forms.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );
  return entries.filter(Boolean).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
}

/**
 * Get all research assistance resources
 */
export async function getAllResearchAssist() {
  const slugs = await reader.collections.researchAssist.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.researchAssist.read(slug);
      return entry ? { slug, ...entry } : null;
    })
  );
  return entries.filter(Boolean).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
}
