import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// GET route to act as a callback if the authentication from Github was successful
export async function GET(request: NextRequest) {
  // request URL would contain a code if the authentication was successful
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  console.log("here");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
    console.log("there");
  }

  console.log("request url => ", requestUrl.origin);

  return NextResponse.redirect(requestUrl.origin);
}
