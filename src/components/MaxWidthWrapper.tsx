"use client";

import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    /* the container.xl sets the width to 1280px so we do not need to use any padding */
    <Container maxW="container.xl" p={0}>
      {children}
    </Container>
  );
};

export default MaxWidthWrapper;
