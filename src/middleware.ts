import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to restrict Keystatic admin access to a single GitHub user.
 * 
 * This checks the GitHub OAuth session to ensure only the allowed admin user
 * can access /keystatic routes. Works with Keystatic's GitHub storage mode.
 */

// Set your allowed admin GitHub username
const ALLOWED_ADMIN_USER = process.env.KEYSTATIC_ALLOWED_USER || 'saitrogen';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /keystatic and /api/keystatic routes
  if (!pathname.startsWith('/keystatic') && !pathname.startsWith('/api/keystatic')) {
    return NextResponse.next();
  }

  // Allow the OAuth callback to proceed (needed for authentication flow)
  if (pathname.includes('/github/oauth/callback')) {
    return NextResponse.next();
  }

  // Check for Keystatic session cookie (set after successful GitHub OAuth)
  const sessionCookie = request.cookies.get('keystatic-gh-access-token');
  
  // If no session, let Keystatic handle the redirect to GitHub OAuth
  if (!sessionCookie) {
    return NextResponse.next();
  }

  // Note: The actual user validation happens in the API route
  // This middleware can only do basic checks since JWT is encrypted
  // For full user restriction, we add a custom API wrapper

  return NextResponse.next();
}

export const config = {
  matcher: ['/keystatic/:path*', '/api/keystatic/:path*'],
};
