import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function checkSession() {
  const supabase = createServerComponentClient({ cookies });

  // get the user's session and redirect
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { session, user: user! };
}
