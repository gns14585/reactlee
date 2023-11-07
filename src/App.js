import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <div>
      <Box>
        <Button onClick={onClick}>텍스트 바꾸기</Button>
      </Box>
    </div>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  function handleButtonClcik() {
    onClick("안녕하세요");
  }

  return (
    <div>
      <MyComp1 onClick={handleButtonClcik}></MyComp1>
      {/* MyComp1에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/* MyComp2에 있는 text가 바뀌게 */}
    </div>
  );
}

export default App;
