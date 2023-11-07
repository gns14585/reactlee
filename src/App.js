import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function Comp() {
  // 3. context 사용하기 : useContext(Context);
  const message = useContext(MessageContext);

  return <Text>받은 메세지 : {message}</Text>;
}

function BComp() {
  return <Comp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccompe에 전달하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기 : <Context.Provider value={state}></Context.Provider>
  // 3. tree안에 context 사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지")}>메세지 바꾸기</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기
// context 이름은 대문자로 시작하고 Context로 끝남 (...Context)
const MessageContext = createContext(null);

export default App;
