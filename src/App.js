function App() {
  // JSX에서 태그 사용 시 꼭 종료태그를 작성해야함
  // 빈 요소이면 시작태그에서 종료
  return (
  <div>
    <h1>hello react</h1>
      <h2>hi react</h2>
      <p>Lorem ipsum dolor.
        <br /> Lorem ipsum dolor.</p>
      <MyComp />
  </div>
  );
}

// built-in component는 소문자로 시작 (기본태그)
// component 명은 대문자로 시작 (사용자 정의 태그)
// return 문을 가져야함
// return 값은 보통 JSX 코드
function MyComp() {
    // return 에 jsx 코드 작성 가능
    // 꼭 하나의 root tag가 존재해야함
    // return 값이 여러 줄이면 () 로 감싸기
    // root tag가 필요없다면 fragment 사용 가능

    // jsx에서 주석 사용법
    // {/*  */}
    return (
        <>
            {/* fragment는 <></> */}
            <h1>HI COMPONENT</h1>
            <h2>hello</h2>
        </>
    )
}

export default App;
