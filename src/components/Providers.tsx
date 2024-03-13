"use client";

import theme from "@/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import ReactQueryProvider from "@/app/_helpers/provider";
import { usePathname } from "next/navigation";

const Providers = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  // check if current route contains the dashboard word
  const isWithoutNav = pathname.includes("/dashboard");

  return isWithoutNav ? (
    <ReactQueryProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ReactQueryProvider>
  ) : (
    <ReactQueryProvider>
      <ChakraProvider theme={theme}>
        <Nav />
        {children}
        <Footer />
      </ChakraProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
