import { Button } from "@chakra-ui/react";

function App() {
  function func1() {
    console.log("first");
  }
  function func2() {
    console.log("second");
  }
  return (
    <>
      <Button onClick={func1}>Lorem.</Button>
      <Button onClick={func2}>Perferendis?</Button>
    </>
  );
}

export default App;
