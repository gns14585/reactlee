import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* Flex 가로배치 */}
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Illo!</Box>
        <Box bg={"gray"}>Natus!</Box>
        <Box bg={"blue"}>Saepe.</Box>
        <Box bg={"green"}>Cumque!</Box>
      </Flex>
    </>
  );
}

export default App;
