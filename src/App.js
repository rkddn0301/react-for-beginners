import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// useEffect Cleanup 방식 2가지
// Hello가 등장할 땐 Hi를, 숨길 땐 return 기능을 통해 이 함수가 끝났다고 useEffect로 알림
// 많이 중요한 내용은 아님
function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [switching, setSwitching] = useState(true);
  const onClick = () => setSwitching((prev) => !prev);

  return (
    <div>
      {switching ? <Hello /> : null}
      <button onClick={onClick}>{switching ? "Show" : "Hide"}</button>
    </div>
  );
}

export default App;
