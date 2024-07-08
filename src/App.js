import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState(0);
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // ...Array : 현재 가지고 있는 전체 배열 값을 의미.
    // currentArray 매개변수에 작성된 toDo를 currentArray 배열에 넣는다는 의미.
    setToDos((currentArray) => [toDo, ...currentArray]);

    setTodo("");
  };

  // toDO 작성 시 배열인 toDos에 반영될 때마다 console.log 발생
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      {/* array.map((value, key)) : 하나의 array(toDos)에 있는 value을 내가 원하는 무엇이든지로 바꿔줌. 
                  array에 개수만큼 반복출력해줌.*/}
      {/* map의 인자 중에 value은 array의 대체변수이고, key는 map에서 출력할 때 필요한 순서라고 보면된다. */}
      {/* map은 보통 `key: value` 출력 방식인데 react에서 value만 출력하면 key가 없는거라 list 형식으로
      인식하여 출력은 되지만 오류가 발생한다. 따라서 key도 지정해주는 것이 좋다. */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
