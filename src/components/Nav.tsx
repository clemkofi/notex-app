"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import logo from "../assets/logo.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Nav = () => {
  const [state, setState] = useState(<ChevronDownIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlein = (e: Event) => {
    setState(<ChevronUpIcon />);
  };
  const handleout = () => {
    setState(<ChevronDownIcon />);
  };

  // console.log(loginauth);
  return (
    <MaxWidthWrapper>
      <Box
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #D3D3D3"
        maxWidth="98%"
        margin="auto"
        paddingY="0.8%"
      >
        <Box display="flex" alignItems="center">
          <Box maxWidth={{ base: "15%", md: "12", lg: "35%" }}>
            <Link href="/">
              <Image src={logo.src} />
            </Link>
          </Box>
        </Box>
        <Box
          width={{ lg: "90%", xl: "70%" }}
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Link href="/">
            <Text fontSize="xl" fontWeight="600">
              Start
            </Text>
          </Link>
          <Link href="/uber-notex">
            <Text fontSize="xl" fontWeight="600">
              Über Notex
            </Text>
          </Link>
          <Link href="/plattformen">
            <Text fontSize="xl" fontWeight="600">
              Plattformen
            </Text>
          </Link>
          <Link href="/kontakt">
            <Text fontSize="xl" fontWeight="600">
              Kontakt
            </Text>
          </Link>
          {/* <Link href="/login">
          <Button bg="none" border="1px solid">
            LOGIN
          </Button>
        </Link> */}
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <HamburgerIcon marginLeft="-100%" onClick={onOpen} />
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <Box display="flex" alignItems="center">
                  <Box maxWidth={{ base: "50%", md: "12", lg: "80%" }}>
                    <Image src={logo.src} />
                  </Box>
                </Box>
              </DrawerHeader>
              <DrawerBody display="flex" flexDirection="column" gap={3}>
                <Box>
                  <Link href="/">
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                      Start
                    </Text>
                  </Link>
                </Box>
                <Box>
                  <Link href="/uber-notex">
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                      Über Notex
                    </Text>
                  </Link>
                </Box>
                <Box>
                  <Link href="/plattformen">
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                      Plattformen
                    </Text>
                  </Link>
                </Box>
                <Box>
                  <Link href="/kontakt">
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                      Kontakt
                    </Text>
                  </Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default Nav;
