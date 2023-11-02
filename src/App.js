import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Hic!</Button>
      <Button colorScheme="orange">Dolorum.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Distinctio?
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Repellat.
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Dolorem!
      </Button>
      <Button colorScheme="orange" variant={"ghost"}>
        Quam.
      </Button>
      <Button variant="link">Atque!</Button>
      <Button leftIcon={<EmailIcon />}>Odio.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Quisquam!</Button>
      <Button isLoading>Quasi.</Button>
      <Button isLoading loadingText="전송중">
        Voluptas.
      </Button>
      <Button>Quos.</Button>
      <Button>Rerum.</Button>
      <Button>Officiis.</Button>
      <Button>Officia?</Button>
      <Button>Vel?</Button>
      <Button>Delectus?</Button>
      <Button>Perspiciatis.</Button>
      <Button>Quasi!</Button>
      <Button>Eum?</Button>
      <Button>Qui.</Button>
      <Button>Hic.</Button>
      <Button>Minima.</Button>
      <Button>Vel?</Button>
      <Button>Cumque.</Button>
      <Button>Consequuntur?</Button>
      <Button>In!</Button>
      <Button>Nam.</Button>
      <Button>Sapiente.</Button>
    </>
  );
}

export default App;
