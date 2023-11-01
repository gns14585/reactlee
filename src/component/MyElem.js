export function MyElem() {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
export function MyNavBar() {
  return (
    <div>
      <p>{country}</p>
    </div>
  );
}
export function MyContent() {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
}
let country = "한국";
let text = "안녕하세요?";
let value = "집가고싶다";

export { country, value, text };
