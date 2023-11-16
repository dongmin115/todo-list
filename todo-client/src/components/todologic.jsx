import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todologic(){
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
        <div className="container w-full h-full">
      <form onSubmit={createTodo} className="pb-6">
        <input
          type="text"
          value={input}
          placeholder="Register to do..."
          onChange={(e) => setInput(e.currentTarget.value)}
          className="w-full h-12 my-4 font-normal text-lg px-6 border-2 rounded-sm border-gray-300 focus:outline-blue-400 shadow-md"
        />
        <input ref={inputRef} type="file" onChange={onLoadFile}
        className="file:border-0 file:rounded-full file:bg-blue-400 file:px-4 file:text-sm 
        file:hover:cursor-pointer hover:cursor-pointer appearance-none"></input>
        <button onClick={createTodo} className=""><FontAwesomeIcon icon={faPen} style={{color: "#60a5fa",}} size="lg"/></button>
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
            <button onClick={() => deleteTodo(todo.id)} className="ml-auto"><FontAwesomeIcon icon={faXmark} /></button>
          </li>
        ))}
      </ul>
    </div>
    )
}