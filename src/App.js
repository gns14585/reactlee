import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handleButtonClickUp(e) {
    setNumber(number + 1);
  }

  function handleButtonClickDown(e) {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClickUp}>증가</Button>
      <Button onClick={handleButtonClickDown}>감소</Button>
    </>
  );
}

export default App;
