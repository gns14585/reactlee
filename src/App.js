import { Box, Image } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="480px">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Box>
        <Image boxSize={"100px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize={"200px"} src="https://bit.ly/dan-abramov" />
        <Image
          borderRadius={"full"}
          boxSize={"200px"}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box>
        <Image src="abcd.jpg" fallbackSrc="https://via.placeholder.com/150" />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
