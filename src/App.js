import { Button } from "@chakra-ui/react";

function App(props) {
  let handleClickButton1 = () => {
    console.log("1번 버튼 클릭됨");
  };

  let handleClickButton2 = () => {
    console.log("2번 버튼 클릭됨");
  };

  // 동일한 기능을 가진 코드를 이렇게 작성하게 되면 더 간결해짐
  let handleButtonClick = (number) => {
    console.log(number + "번째 버튼 클릭됨");
  };

  return (
    <div>
      <Button onClick={handleClickButton1}>첫번째버튼</Button>
      <Button onClick={handleClickButton2}>두번째버튼</Button>
      <Button onClick={() => handleButtonClick(3)}>세번째버튼</Button>
      <Button onClick={() => handleButtonClick(4)}>네번째버튼</Button>
      <Button onClick={() => handleButtonClick(5)}>다섯번째버튼</Button>
      <Button onClick={() => handleButtonClick(6)}>여섯번째버튼</Button>
    </div>
  );
}

export default App;
