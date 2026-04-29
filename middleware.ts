import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Root redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/service', request.url));
  }



}

// Config to match all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (local images)
     */
    '/((?!api|_next|favicon.ico|images).*)',
  ],
};
