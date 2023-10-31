function App() {
  const num1 = Math.ceil(Math.random() * 5);
  const num2 = Math.ceil(Math.random() * 5);
  let message;

  if (num1 === num2) {
    message = "당첨"
  } else {
    message = "당첨안됨"
  }
  // 두 수를 출력하고
  // 두 수가 같으면
  // 당첨이 출력되게
  // 두 수가 다르면
  // 다시 던져보세요

  return (
    <div>
      <h1>주사위 번호 : {num1}</h1>
      <h1>주사위 번호 : {num2}</h1>
      <h1>결과 : {message}</h1>
    </div>
  );
}

export default App;
