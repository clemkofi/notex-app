import { PropsWithChildren, useEffect, useState } from "react";
import BasePage from "@/components/BasePage";

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

// Custom Chakra theme
export default function AdminLayout(props: DashboardLayoutProps) {
  const { children, ...rest } = props;

  return <BasePage>{children}</BasePage>;
}
