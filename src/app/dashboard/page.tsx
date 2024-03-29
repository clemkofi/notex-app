import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page({}) {
  const supabase = createServerComponentClient({ cookies });

  // get the user's session and redirect
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log({ session });

  if (!session) {
    redirect("/login");
  } else {
    redirect("/dashboard/startseite");
  }
}
