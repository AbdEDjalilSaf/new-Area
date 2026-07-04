import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

}

export const config = {
  matcher: ['/admin/:path*'],
};