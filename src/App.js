function App() {
  return (
    <div>
      <MyText value="property 연습" style={} />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value} </p>
    </div>
  )
}
export default App;
