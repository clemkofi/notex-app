"use client";

import { usePathname } from "next/navigation";

const Classes = () => {
  const pathname = usePathname();
  console.log({ pathname });

  return <div>Klassen</div>;
};

export default Classes;
