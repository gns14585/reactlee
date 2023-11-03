import { Button } from "@chakra-ui/react";

function App(props) {
  let handleClickButton1 = () => {
    console.log("1번 버튼 클릭됨");
  };

  let handleClickButton2 = () => {
    console.log("2번 버튼 클릭됨");
  };

  let handleButtonClick = (number) => {
    console.log(number + "번째 버튼 클릭됨");
  };

  handleButtonClick(3);
  handleButtonClick(4);
  return (
    <div>
      <Button onClick={handleClickButton1}>첫번째버튼</Button>
      <Button onClick={handleClickButton2}>두번째버튼</Button>
      <Button onClick={() => handleButtonClick(3)}>세번째버튼</Button>
      <Button onClick={() => handleButtonClick(4)}>네번째버튼</Button>
    </div>
  );
}

export default App;
