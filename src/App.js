import React, { createContext, useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { MyInput } from "./component/MyInput";
import { MyText } from "./component/MyText";

function App(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  // function handleButtonClick() {
  //   const newItem = [...items];
  //   newItem.push(text);
  //   setItems(newItem);
  // }
  //
  // function handleButtonRemoveClick(index) {
  //   const removeItem = [...items];
  //   removeItem.splice(index, 1);
  //   setItems(removeItem);
  // }

  return (
    <>
      <div>
        <TextContext.Provider value={{ text, setText }}>
          <MyInput></MyInput>
          <MyText></MyText>
        </TextContext.Provider>
        {/*<Button onClick={handleButtonClick}>추가</Button>*/}
      </div>

      {/*<Box>*/}
      {/*  <UnorderedList>*/}
      {/*    {items.map((item, index) => (*/}
      {/*      <ListItem key={index}>*/}
      {/*        {item}*/}
      {/*        <Button onClick={() => handleButtonRemoveClick(index)}>*/}
      {/*          지우기*/}
      {/*        </Button>*/}
      {/*      </ListItem>*/}
      {/*    ))}*/}
      {/*  </UnorderedList>*/}
      {/*</Box>*/}
    </>
  );
}

export const TextContext = createContext(null);

export default App;
