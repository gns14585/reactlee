import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Debitis, ipsum.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Asperiores, ea?
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Eveniet, non!
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Aut, ipsa!
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Quod, ullam.
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Fuga, recusandae.
      </Box>
      <Box border={"5px solid black"} borderRadius={"300"}>
        Illo, modi.
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={100}>
        Esse, fugiat.
      </Box>
      <Box border={"5px solid green"} borderBottomRightRadius={100}>
        Error, qui.
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={100}>
        Labore, soluta.
      </Box>
      <Box border={"5px solid red"} borderTopLeftRadius={100}>
        Non, perspiciatis.
      </Box>
      <Box border={"5px solid skyblue"} borderTopLeftRadius={100}>
        Necessitatibus, qui.
      </Box>
      <Box shadow={"10px 5px 5px red"}>Cumque, voluptatem?</Box>
      <Box shadow={"lg"}>Aspernatur, iure.</Box>
      <Box shadow={"xl"}>Ab, et?</Box>
      <Box shadow={"md"}>Quaerat, reiciendis?</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Fugiat, reprehenderit.
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Est, itaque?
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Architecto, fuga.
      </Box>
      <Box bg={"red.300"} my={"50px"}>
        Lorem ipsum.
      </Box>
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Asperiores, magnam?
      </Box>
      <Box bg="gold" m="3">
        Dolorum, facilis.
      </Box>
      <Box bg="yellow.900" m="4">
        Ipsam, placeat.
      </Box>
      <Box bg="gray.400" m="5">
        Quidem, quod?
      </Box>
      <Box bg="red.400" p={"10px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400" px={"20px"}>
        Aperiam, iure.
      </Box>
      <Box bg="purple" py={"30px"}>
        Dolore, minima.
      </Box>
      <Box bg="gold" pl={"20px"}>
        Laudantium, similique.
      </Box>
      <Box bg="tomato" p={1}>
        Optio, possimus!
      </Box>
      <Box bg="red.600" p={2}>
        Alias, debitis.
      </Box>
      <Box bg="blue.600" pb={"50px"}>
        Adipisci, expedita.
      </Box>
      <Box bg="black" pr={"100px"}>
        Exercitationem, possimus.
      </Box>
      <Box bg="gray.300">Rerum, voluptates.</Box>
      <Box bg="skyblue">Inventore, quia.</Box>
      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          color: "gray",
          paddingLeft: "20px",
          boxShadow: "10px 5px 5px red",
        }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;
