import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function handleChangeName(e) {
    setUsername(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handleChangeName} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handleChangeEmail} />
      </Box>
      <Text>
        {username}의 email은 {email} 입니다. 주소는 {address} 입니다.
      </Text>

      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </div>
  );
}

export default App;
