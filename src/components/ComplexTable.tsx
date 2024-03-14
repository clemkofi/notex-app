import {
  Box,
  Center,
  Flex,
  Icon,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
// Custom components
import * as React from "react";
// Assets
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
import { RowObj } from "@/types/sharedTypes";

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function ComplexTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("black", "white");
  const circleTextColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  let defaultData = tableData;

  const columns = [
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Termin
        </Text>
      ),
      cell: (info) => (
        <Box bg="brand.500" p="5px" borderRadius={"8%"}>
          <Center>
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          </Center>
        </Box>
      ),
    }),
    columnHelper.accessor("class_name", {
      id: "class_name",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Klasse
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg={info.getValue().color}
            w="40px"
            h="40px"
            borderRadius={"50%"}
          >
            <Center top={0} left={0} w={"100%"} h={"100%"}>
              <Text fontSize={"15px"} fontWeight="bold" color={circleTextColor}>
                {info.getValue().name}
              </Text>
            </Center>
          </Box>
        </Flex>
      ),
    }),
    columnHelper.accessor("subjectPre", {
      id: "subjectPre",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        ></Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg={info.getValue().color}
            w="40px"
            h="40px"
            borderRadius={"50%"}
          >
            <Center top={0} left={0} w={"100%"} h={"100%"}>
              <Text fontSize={"15px"} fontWeight="bold" color={circleTextColor}>
                {info.getValue().name}
              </Text>
            </Center>
          </Box>
        </Flex>
      ),
    }),
    columnHelper.accessor("assessmentType", {
      id: "assessmentType",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Aktivität
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    // <Card
    //   flexDirection="column"
    //   w="100%"
    //   px="0px"
    //   overflowX={{ sm: "scroll", lg: "hidden" }}
    // >
    //   {/* <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
    //     <Text
    //       color={textColor}
    //       fontSize="22px"
    //       fontWeight="700"
    //       lineHeight="100%"
    //     >
    //       Complex Table
    //     </Text>
    //   </Flex> */}
    <Box overflowX={{ sm: "scroll", xl: "hidden" }}>
      <Table variant="simple" color="gray.500" mb="24px" mt="12px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe="10px"
                    borderColor={borderColor}
                    cursor="pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex
                      justifyContent="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: "",
                        desc: "",
                      }[header.column.getIsSorted() as string] ?? null}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table
            .getRowModel()
            .rows.slice(0, 5)
            .map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td
                        key={cell.id}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
    // </Card>
  );
}
