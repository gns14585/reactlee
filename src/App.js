import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const text = useContext(TextContext);
  return <Text>받은 메세지 : {text}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Button onClick={() => setText("변경")}>변경</Button>
      <TextContext.Provider value={text}>
        <AComp />
      </TextContext.Provider>
    </div>
  );
}

const TextContext = createContext(null);

export default App;
