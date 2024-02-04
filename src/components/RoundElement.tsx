"use client";

import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface RoundElementProps {
  id: number;
  image: string;
  text: string;
  title: string;
}

const RoundElement = ({ id, image, text, title }: RoundElementProps) => {
  return (
    <div>
      <Stack align={"center"} mx={"auto"}>
        <Image
          src={image}
          alt="show-image"
          w="80%"
          alignItems="center"
          //   ml="10%"
          mt={5}
          mb={5}
          border="2px solid #A3C185"
          borderRadius="full"
        />

        <Heading as="h3" size="md" alignItems="center">
          {title}
        </Heading>
        {/* <Text fontSize="lg">{text}</Text> */}
      </Stack>
    </div>
  );
};

export default RoundElement;
