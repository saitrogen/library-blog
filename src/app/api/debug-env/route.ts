import { NextResponse } from 'next/server';

/**
 * TEMPORARY DEBUG ENDPOINT - DELETE AFTER FIXING OAUTH ISSUE
 * 
 * This endpoint checks if required Keystatic OAuth env vars exist
 * without exposing their actual values (except non-sensitive ones).
 */
export async function GET() {
  return NextResponse.json({
    // Check existence only (don't expose secrets)
    KEYSTATIC_GITHUB_CLIENT_ID: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    KEYSTATIC_GITHUB_CLIENT_SECRET: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    KEYSTATIC_SECRET: !!process.env.KEYSTATIC_SECRET,
    
    // GitHub App Slug (required for GitHub mode)
    NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG || '(not set)',
    
    // Safe to show these values
    VERCEL_GIT_REPO_OWNER: process.env.VERCEL_GIT_REPO_OWNER || '(not set)',
    VERCEL_GIT_REPO_SLUG: process.env.VERCEL_GIT_REPO_SLUG || '(not set)',
    
    // Additional helpful info
    NODE_ENV: process.env.NODE_ENV,
    
    // Length hints (helps identify truncation issues without exposing values)
    CLIENT_ID_LENGTH: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.length || 0,
    CLIENT_SECRET_LENGTH: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET?.length || 0,
    KEYSTATIC_SECRET_LENGTH: process.env.KEYSTATIC_SECRET?.length || 0,
    APP_SLUG_LENGTH: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG?.length || 0,
  });
}
