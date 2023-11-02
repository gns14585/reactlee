import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"120px"}>
            <option value="value&">Lorem.</option>
            <option value="value&">Nulla.</option>
            <option value="value&">Omnis!</option>
            <option value="value&">Iste.</option>
            <option value="value&">Saepe!</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
