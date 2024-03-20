import { PropsWithChildren, useEffect, useState } from "react";
import BasePage from "@/components/BasePage";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCurrentUserProfile } from "@/server/data-layer/profiles";

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

// Custom Chakra theme
export default async function AdminLayout(props: DashboardLayoutProps) {
  const { children, ...rest } = props;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profile"],
    queryFn: () => getCurrentUserProfile(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BasePage>{children}</BasePage>
    </HydrationBoundary>
  );
}
