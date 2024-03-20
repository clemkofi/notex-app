"use server";

import type { profiles } from "@prisma/client";
import { db } from "../db";
import { checkSession } from "./sessionChecker";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// TODO get the current user and find the profile for him
export async function getProfiles() {
  const { session } = await checkSession();
  if (!(session && session !== null)) return;
  return await db.profiles.findMany();
}

export async function getCurrentUserProfile() {
  const { session, user } = await checkSession();
  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  return await db.profiles.findMany({
    where: {
      id: user.id,
    },
    take: 1,
  });
}

export async function addProfile(profileInfo: profiles) {
  return await db.profiles.create({
    data: profileInfo,
  });
}
