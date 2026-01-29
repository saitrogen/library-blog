import { redirect } from 'next/navigation';

// Keystatic requires /keystatic path (hardcoded in @keystatic/core)
// Redirect /admin to /keystatic for convenience
export default function AdminRedirect() {
  redirect('/keystatic');
}
