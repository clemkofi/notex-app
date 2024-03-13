"use client";

import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";

const page = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <Box
          _hover={{ cursor: "pointer" }}
          color="white"
          bg="#11047A"
          w="40px"
          h="40px"
          borderRadius={"50%"}
        />
        <Center top={0} left={0} position={"absolute"} w={"100%"} h={"100%"}>
          <Text fontSize={"xs"} fontWeight="bold" color={"white"}>
            AP
          </Text>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

{
  /* <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg="#11047A"
            w="40px"
            h="40px"
            borderRadius={"50%"}
          />
          <Center top={0} left={0} position={"absolute"} w={"100%"} h={"100%"}>
            <Text fontSize={"xs"} fontWeight="bold" color={"white"}>
              AP
            </Text>
          </Center> */
}

export default page;
