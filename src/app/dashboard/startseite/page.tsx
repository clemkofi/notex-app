"use client";

import ClassView from "@/components/ClassView";
import ComplexTable from "@/components/ComplexTable";
import MiniCalendar from "@/components/calendar/MiniCalendar";
import { HSeparator } from "@/components/separator/Separator";
import { RowObj } from "@/types/sharedTypes";
import { Box, Center, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const tableDataComplex: RowObj[] = [
  {
    subjectPre: {
      name: "DLS",
      color: "#FE8892",
    },
    assessmentType: "Wörterübung",
    class_name: {
      name: "1a",
      color: "#DACFC5",
    },
    date: "12.01.2024",
  },
  {
    subjectPre: {
      name: "SU",
      color: "#C5E2A7",
    },
    assessmentType: "Lernzielkontrolle",
    class_name: {
      name: "1a",
      color: "#DACFC5",
    },
    date: "28.02.2024",
  },
  {
    subjectPre: {
      name: "M",
      color: "#BCDCFB",
    },
    assessmentType: "Schularbeit",
    class_name: {
      name: "2b",
      color: "#DACFC5",
    },
    date: "13.03.2024",
  },
  {
    subjectPre: {
      name: "DLS",
      color: "#FE8892",
    },
    assessmentType: "Wörterübung",
    class_name: {
      name: "2b",
      color: "#DACFC5",
    },
    date: "24.03.2024",
  },
];

const page = () => {
  return (
    <>
      <Box pt={{ base: "50px", md: "80px", xl: "80px" }}>
        <Box h="131px" w="100%">
          <Center>
            <Text
              color={"brand.700"}
              fontWeight="bold"
              fontSize="60px"
              mt="10px"
            >
              Hallo Irena!
            </Text>
          </Center>
        </Box>

        <Box mx="40px">
          <HSeparator mb="20px" />
        </Box>

        <ClassView />

        <Box mx="40px">
          <HSeparator mb="20px" />
        </Box>

        <Box w="100%" mb="20px">
          <HStack justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="xl" mt="10px">
              Nächste Termine
            </Text>
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px" mb="20px">
          <ComplexTable tableData={tableDataComplex} />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default page;
