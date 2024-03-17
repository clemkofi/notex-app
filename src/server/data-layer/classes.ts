"use server";

import { db } from "../db";

export async function getlastThreeClasses() {
  return await db.classes.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
}

export async function addClass(classInfo: { name: string; color: string }) {
  return await db.classes.create({
    data: {
      name: classInfo.name,
      color: classInfo.color,
      ownerId: "4e935ad2-d88e-4216-90b5-2f8957415fa5",
    },
  });
}
