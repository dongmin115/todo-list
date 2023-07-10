import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [imageFile, setImageFile] = useState();

  const onLoadFile = (e) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const getTodos = async () => {
    const response = await axios.get("/api/todos");
    setTodos(response.data.todos);
  };

  const createTodo = async (e) => {
    e.preventDefault();

    if (input === "") return;

    const formData = new FormData();

    formData.append("todoData", input);
    formData.append("file", imageFile);

    const response = await axios.post("/api/todos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setTodos((prev) => [...prev, response.data]);
    setInput("");
    setImageFile(null);
    inputRef.current.value = null;
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = async (id) => {
    const response = await axios.put(`/api/todos/${id}`);
    const updateTodos = todos.map((todo) =>
      todo.id === id ? response.data : todo
    );
    setTodos(updateTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <input ref={inputRef} type="file" onChange={onLoadFile} />
        <button onClick={createTodo}>생성</button>
      </form>

      <ul className="todoListWrapper">
        {todos.map((todo) => (
          <li key={todo.id} className="todoWrapper">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => updateTodo(todo.id)}
            />
            {todo.thumbnail && (
              <img className="thumbnail" src={todo.thumbnail} alt="thumbnail" />
            )}
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
