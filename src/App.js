import React, { createContext, useContext, useState } from "react";
import {
  Box,
  Button,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function CComp() {
  const message = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    const nextItem = [...items];
    nextItem.push(message);
    setItems(nextItem);
  }

  return (
    <>
      <Box>
        <Input onChange={(e) => setMessage(e.target.value)} />
        <MessageContext.Provider value={message}>
          <AComp />
        </MessageContext.Provider>
        <Button onClick={handleButtonClick}>추가</Button>
      </Box>

      {/* 리스트 추가 */}
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

const MessageContext = createContext(null);

export default App;
