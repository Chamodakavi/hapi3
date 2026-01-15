// src/middleware.tsx
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Check for a custom auth cookie
  const session = request.cookies.get('session');

  // If trying to access profile without a session, redirect to sign-in
  if (!session && request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ['/profile/:path*', '/manage-Campaign/:path*'],
};