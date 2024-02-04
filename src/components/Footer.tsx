"use client";

import theme from "@/theme";
import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("brand.500", "whiteAlpha.50");
  return (
    <Box w="full" bg={bgColor} color="white" py={5}>
      <VStack alignItems="center">
        <Text fontWeight="bold">NoteX</Text>
        <Text>Copyright © 2023</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
