import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(setup) : The Function with your Effect's logic. 부작용(부수적인 작용)이 있는 함수
  // 두번쨰 파라미터        : setup을 실행시키는 값의 나열(배열)
  //                       빈 배열이면 첫 렌더링 때만 실행됨
  useEffect(() => {
    console.log("effect 함수 실행됨");
  }, [number, text]);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
