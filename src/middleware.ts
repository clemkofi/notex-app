import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const sessionResult = await supabase.auth.getSession();
  // console.log({ sessionResult });
  console.log(req.url);
  const url = new URL(req.url);
  const origin = url.origin;
  const pathname = url.pathname;
  console.log({ origin });
  console.log({ pathname });
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);
  requestHeaders.set("x-origin", origin);
  requestHeaders.set("x-pathname", pathname);

  // if session exists
  if (sessionResult?.data.session !== null || req.nextUrl.pathname === "/login")
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  // if a positive login request was made
  if (req.nextUrl.searchParams.get(`code`))
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/login";
  return NextResponse.redirect(redirectUrl);
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/((?!_next/static|_next/image|favicon.ico).*)",
    "/dashboard/:path*",
  ],
};
