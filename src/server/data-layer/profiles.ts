"use server";

import type { profiles } from "@prisma/client";
import { db } from "../db";
import { checkSession } from "./sessionChecker";

export async function getProfiles() {
  if (!(await checkSession())) return;
  return await db.profiles.findMany();
}

export async function addProfile(profileInfo: profiles) {
  return await db.profiles.create({
    data: profileInfo,
  });
}
