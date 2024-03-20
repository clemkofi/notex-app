import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const sessionResult = await supabase.auth.getSession();
  console.log({ sessionResult });
  console.log(req.url);

  // if session exists
  if (sessionResult?.data.session !== null || req.nextUrl.pathname === "/login")
    return res;

  // if a positive login request was made
  if (req.nextUrl.searchParams.get(`code`)) return res;

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
