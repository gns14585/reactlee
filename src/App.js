import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

// 두개의 버튼 만들기
// 첫번째 버튼은 클릭하면 콘솔에 "hello"
// 두번째 버튼은 클릭하면 콘솔에 "greeting"
function App() {
  function executeClick() {
    console.log("hello");
  }
  function children() {
    console.log("greeting");
  }
  return (
    <>
      <MyButton>버튼</MyButton>
      <MyButton>버튼</MyButton>
    </>
  );
}

export default App;
