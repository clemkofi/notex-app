import { IRoute } from "@/types/navigation";
import routes from "./routes";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (href: string): IRoute => {
  const foundRoute: IRoute = routes.find(
    (route) => route.layout + route.path === href && route
  )!;

  return foundRoute;
};

export const getActiveRoute = (href: string): string => {
  const route = findCurrentRoute(href);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (href: string): boolean => {
  const route = findCurrentRoute(href);
  return route?.secondary!;
};

// export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
//   // return getActiveRoute(routes) || false;
// };
