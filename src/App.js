import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "",
      isDone: false,
    },
  ]);

  const doneChange = (id) => {
    const doneList = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(doneList);
  };

  return (
    <div>
      <input
        type='text'
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (title.length === 0) {
            return null;
          } else if (title.length >= 1) {
            setTodos([...todos, { id: todos.length + 1, title: title }]);
          }
        }}
      >
        추가하기
      </button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <button
              onClick={() => {
                const id = todo.id;
                setTodos(todos.filter((todo) => id !== todo.id));
                console.log(todo.id);
              }}
            >
              삭제하기
            </button>
            <button onClick={() => doneChange(todo.id)}>
              {todo.isDone === true ? "취소" : "완료"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
