"use client";

import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import RoundElement from "./RoundElement";

import web from "../assets/web.png";
import ios from "../assets/ios.png";
import android from "../assets/android.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const infoArr = [
  {
    id: 1,
    image: web.src,
    title: "Web-Applikation",
    text: "",
  },
  {
    id: 2,
    image: ios.src,
    title: "IOS - Web App",
    text: "",
  },
  {
    id: 3,
    image: android.src,
    title: "Android - Web App",
    text: "",
  },
];

const Plattformen = () => {
  return (
    <MaxWidthWrapper>
      <Box mt={100}>
        <Stack align={"center"} mx={"auto"}>
          <Heading as="h2" size="3xl" noOfLines={1} px={1}>
            Plattformen
          </Heading>
          <Text fontSize="2xl" mb={10} px={[4, 2]}>
            Sie können NoteX als Web-App auf einer dieser Plattformen verwenden.
          </Text>
        </Stack>

        <SimpleGrid
          columns={[1, 2, 2, 3, 3, 3]}
          spacing={[5, 5, 8, 8, 10, 10]}
          w="90%"
          m="auto"
        >
          {/* <Box bg='tomato' height='80px'></Box> */}
          {infoArr.map((item) => (
            <Box mb={20} key={item.id}>
              <RoundElement
                id={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            </Box>
          ))}
        </SimpleGrid>
        <Stack align={"center"} mx={"auto"} mb={50}>
          <Button colorScheme="brand" size="lg">
            Mehr erfahren <ArrowForwardIcon ml={5} />
          </Button>
        </Stack>
      </Box>
    </MaxWidthWrapper>
  );
};

export default Plattformen;
