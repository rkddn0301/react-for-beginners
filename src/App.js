import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 새로고침 시에만 useEffect 실행.
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // counter에 변화가 있을 경우 실행.
  useEffect(() => {
    if (counter !== "") {
      console.log("I run when 'counter' changes.");
    }
  }, [counter]);

  // keyword에 변화가 있고, keyword가 없지 않거나, keyword의 길이가 5 이상일 경우에만 useEffect 실행.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  // counter 혹은 keyword에 변화가 있을 경우 실행.
  useEffect(() => {
    if (counter !== "" && keyword !== "") {
      console.log("I run when 'counter' & 'keyword' changes.");
    }
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
