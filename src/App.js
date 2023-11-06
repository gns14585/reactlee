import React, { useState } from "react";
import { Box, Button, ListItem, OrderedList, Text } from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleButtonClick(item) {
    // item의 상태를 item을 추가하도록 변경
    // const newItem = [...items];
    // newItem.push(item);

    // const nextImtes = [...items, item];
    // setItems(nextImtes);

    setItems([...items, item]);
  }

  return (
    <>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림
      </Button>
      <Button onClick={() => handleButtonClick("크로아상")}>크로아상</Button>
      <Button onClick={() => handleButtonClick("단팥빵")}>단팥빵</Button>
      <Box>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}

export default App;
