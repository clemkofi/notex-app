"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import { Text, Icon, Card, Box } from "@chakra-ui/react";
import "./Calendar.css";
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components
import moment from "moment";

export default function MiniCalendar(props: {
  selectRange: boolean;
  [x: string]: any;
}) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());

  const mark = ["28-02-2024", "13-03-2024", "24-03-2024"];

  return (
    <Box
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 20px"
      h="max-content"
      {...rest}
    >
      <Calendar
        value={value}
        // selectRange={selectRange}
        tileClassName={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight-calendar";
          }
        }}
        view={"month"}
        // tileContent={<Text color="brand.500" />}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Box>
  );
}
