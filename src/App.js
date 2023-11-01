function App() {
  return (
    <div>
      <MyHeader color="white" bg="black" text="내가 만든 제목" title="a" />
      <MyHeader color="orange" bg="skyblue" text="다시 만든 제목" />
    {/*
    <div>
      <h1>내가 만든 제목</h1>
    </div>
    */}

    </div>
  );
}

function MyHeader(props) {
  return (
    <div>
      <h1 title="a">내가 만든 제목</h1>
    </div>
  )
}

export default App;
