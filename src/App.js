import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <div>
      <Button as="a" href={to} colorScheme="oragne">
        {children}
      </Button>
    </div>
  );
}

function App() {
  return (
    <>
      <MyLink to="https://www.naver.com">naver 로 </MyLink>
      <MyLink to="https://www.daum.net">daum 으로 </MyLink>
    </>
  );
}

export default App;
