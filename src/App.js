function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" style={{color: black}} />
      <MyElem name="강인" age={33} team="파리" style={{color: black}} />
    </div>
  );
}

function MyElem({ name, age, team, style }) {
  return (
    <div>
      <h1 {style}>
        <ul {style}>
          <li>이름 : {name}</li>
          <li>소속 : {team}</li>
          <li>나이 : {age}</li>
        </ul>
      </h1>
    </div>
  );
}

export default App;
