import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    // Block access to Sanity Studio in production
    if (pathname.startsWith('/studio')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pl', request.url));
  }


  // Allow valid paths
  if (
    pathname === '/' ||
    pathname === '/pl' ||
    pathname === '/en' ||
    pathname.startsWith('/pl/') ||
    pathname.startsWith('/en/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Redirect all other paths to homepage
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};