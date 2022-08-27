import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "",
    },
  ]);
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
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        추가하기
      </button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
