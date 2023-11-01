function App() {
  return (
    <div>
      <MyBox
        text="안녕하세요 중앙정보처리학원 입니다."
        p="5px"
        m="10px"
        color="red"
        bg="yellow"
      />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
