import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <div>
      <MyBox color={"blue"} bg={"green"}>
        View a summary of all your customers over the last month.
      </MyBox>
    </div>
  );
}

export default App;
