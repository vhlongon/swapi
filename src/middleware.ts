import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isFilmPage = request.nextUrl.pathname.startsWith('/film/');

  if (!isFilmPage) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const viewedFilmsCookie = request.cookies.get('viewedFilms')?.value;
  const filmId = request.nextUrl.pathname.split('/').pop() ?? '';

  if (!viewedFilmsCookie) {
    response.cookies.set('viewedFilms', filmId);
    return response;
  }
  const viewedFilms = viewedFilmsCookie.split(',');
  if (viewedFilms?.includes(filmId)) {
    return response;
  }

  const cookieValue = `${viewedFilmsCookie},${filmId}`;
  response.cookies.set('viewedFilms', cookieValue);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
