import { Button } from "@chakra-ui/react";

function App() {
  let func1 = () => {
    console.log("first");
  };
  return (
    <>
      <Button onClick={func1}>Lorem.</Button>
      <Button onClick={() => console.log("second")}>Perferendis?</Button>
    </>
  );
}

export default App;
