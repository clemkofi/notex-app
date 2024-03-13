// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "@/components/icons/Icons";
import { HSeparator } from "@/components/separator/Separator";
import logo from "@/assets/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image
        w="175px"
        my="32px"
        src={logo.src}
        borderRadius="16px"
        mb="28px"
        alt=""
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
