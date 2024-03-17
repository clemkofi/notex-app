"use client";
// Chakra imports
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "@/components/icons/Icons";
import { HSeparator } from "@/components/separator/Separator";
import logo from "@/assets/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image w="175px" my="16px" src={logo.src} borderRadius="16px" alt="" />
      <Text mb="28px" fontSize="2xl" fontWeight="bold">
        Die Notenapp
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
