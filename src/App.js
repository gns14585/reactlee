import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
   */
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Nulla!</Box>
        <Box bg="blue.300">Quaerat.</Box>
        <Box bg="blue.300">Voluptas.</Box>
        <Box bg="blue.300">Explicabo.</Box>
        <Box bg="blue.300">Repellat.</Box>
        <Box bg="blue.300">Excepturi?</Box>
        <Box bg="blue.300">Aliquam.</Box>
        <Box bg="blue.300">Accusantium.</Box>
        <Box bg="blue.300">Alias.</Box>
        <Box bg="blue.300">Ut.</Box>
        <Box bg="blue.300">Cupiditate.</Box>
        <Box bg="blue.300">Ipsa!</Box>
        <Box bg="blue.300">Necessitatibus.</Box>
        <Box bg="blue.300">Debitis.</Box>
        <Box bg="blue.300">Culpa?</Box>
        <Box bg="blue.300">Culpa.</Box>
        <Box bg="blue.300">Numquam.</Box>
        <Box bg="blue.300">Accusamus!</Box>
        <Box bg="blue.300">Natus!</Box>
        <Box bg="blue.300">Nihil.</Box>
        <Box bg="blue.300">Quisquam!</Box>
        <Box bg="blue.300">Officia?</Box>
        <Box bg="blue.300">Animi.</Box>
        <Box bg="blue.300">Facilis?</Box>
        <Box bg="blue.300">Culpa.</Box>
        <Box bg="blue.300">Vel!</Box>
        <Box bg="blue.300">Nesciunt.</Box>
        <Box bg="blue.300">Fugiat!</Box>
        <Box bg="blue.300">Saepe.</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
