import mystyle from "../style1/css1.module.css";
export function MyText() {
  return (
    <div>
      {/* red배경색 , white 글자색 */}
      <h1 className={`${mystyle.error} ${mystyle.special} ${mystyle.coffee}`}>
        Lorem ipsum dolor sit amet.
      </h1>

      <h1
        className={[mystyle.error, mystyle.special, mystyle.coffee].join(" ")}
      >
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
