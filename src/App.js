import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

function App(props) {
  const [message, setMessage] = useState("초기 상태 메세지");

  return (
    <div>
      {/* 2. context에 state 넣기 : <Context.Provider value={state}></Context.Provider> */}
      {/* value 안에 있는 state명과, setstate명의 값들이 동일하면 생략 가능 */}
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}
// 1. context 만들기 : createContext(null);
export const MessageContext = createContext(null);

export default App;
