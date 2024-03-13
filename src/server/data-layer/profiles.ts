"use server";

import { db } from "../db";

export async function getProfiles() {
  return await db.profiles.findMany();
}
