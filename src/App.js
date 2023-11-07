import React, { createContext, useContext, useState } from "react";
import {
  Box,
  Button,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function MyInput() {
  const { setText } = useContext(TextContext);
  return <Input onChange={(e) => setText(e.target.value)} />;
}

function MyText() {
  const { text } = useContext(TextContext);
  return <Text>{text}</Text>;
}

function App(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    const newItem = [...items];
    newItem.push(text);
    setItems(newItem);
  }

  function handleButtonRemoveClick(index) {
    const removeItem = [...items];
    removeItem.splice(index, 1);
    setItems(removeItem);
  }

  return (
    <>
      <div>
        <TextContext.Provider value={{ text, setText }}>
          <MyInput></MyInput>
          <MyText></MyText>
        </TextContext.Provider>
        <Button onClick={handleButtonClick}>추가</Button>
      </div>

      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button onClick={() => handleButtonRemoveClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

const TextContext = createContext(null);

export default App;
