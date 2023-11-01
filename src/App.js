import Box, { color } from "./component/Box";
import Container, { color as col } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: col }} />
    </div>
  );
}

export default App;
