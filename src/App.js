import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라떼"]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    const newCoffee = [...coffees];
    newCoffee.push(text);
    setCoffees(newCoffee);
  }

  return (
    <div>
      <Input value={text} onChange={(e, index) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>

      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
