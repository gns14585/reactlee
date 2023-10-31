function App() {
  return (
    <div>
      <MyComponent1>
      {/*
      <div>
        <h1>Hello Component</h1>
      </div>
      */}
      </MyComponent1>
      <MyComponent2>
      {/*
      <p>lorem ipsum alkdjfl sldkf</p>
      <ul>
        <li>lorem</li>
        <li>ipsum</li>
        <li>dolor</li>
      </ul>
      */}
      </MyComponent2>
    </div>
  );
}

function MyComponent1() {
  return (
      <div>
        <h1>Hello Component</h1>
      </div>
  )
}
function MyComponent2() {
  return (
      <div>
        <p>lorem3</p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
      </div>
  )
}
export default App;
