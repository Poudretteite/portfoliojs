import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pl', 'en'];
const defaultLocale = 'pl';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|images|api|favicon.ico).*)',
  ],
};
