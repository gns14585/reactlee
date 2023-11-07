import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭</Button>;
}

function SomeComp({ value }) {
  return <ChildComp onClick={value} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ text }) {
  return <OtherChildComp message={text} />;
}

function App(props) {
  const [message, setMessage] = useState("원래 메세지");

  return (
    <div>
      <SomeComp value={() => setMessage("다른 메세지")} />
      <OtherComp text={message} />
    </div>
  );
}

export default App;
