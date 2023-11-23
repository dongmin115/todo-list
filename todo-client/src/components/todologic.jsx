import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SideBar from "./sidebar";


export default function Todologic(){

  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [imageFile, setImageFile] = useState();
  let date = new Date();
  let today = date.getDate();                 //getDate()함수는 1부터 시작.
  let [day,setDay] = useState(today);
  const currentMonth = date.getMonth() + 1;   //getMonth()함수는 0부터 시작하여 1월이 0이기 때문에 1을 더해주어야 현재 달의 값이 된다.
  let [month,setMonth] = useState(currentMonth);
  var isClickable = true;
  

  const onClickNextBtn = async () => {
    //getElementById함수는 html요소가 아직 로드되지 않았을 때 호출하면 null 값이 되기 때문에
    //함수 밖에 선언하면 null이 될 가능성이 높으므로 함수 내부에서 요소를 호출해야 html요소가 로드 된 후에 호출하는 것이 보장되므로 내부에서 호출해야 안전하다

      const todoBox = document.getElementById('todoBox'); 

      if(!isClickable){
          return;
      }

      isClickable = false;

      day += 1;

      if(day === 31){
          day = 1;
          month += 1;
      }
      if(month > 12){
          month = 1;
      };
      todoBox.classList.add('animate-blink');
      
      setTimeout( ()=>{
          
          todoBox.classList.remove('animate-blink')
          setMonth(month);
          setDay(day);
          isClickable = true;

      }, 1000);

  }

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
      <div className="flex flex-col w-full h-full items-center">
        <div className="basis-1/4 text-black text-center text-2xl  font-normalfont-['Inter'] w-1/3 py-16">What to do today?</div>
        <div className="basis-4/6 bg-white rounded-[20px] shadow border border-stone-300 w-1/3 px-6 py-3" id='todoBox'>
            <p className='mt-2 text-lg'>{`${month}월 ${day}일`}</p>
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

      <div className="absolute top-1/2 right-[15%]">
        <button id='nextButton' onClick={onClickNextBtn}>
        <FontAwesomeIcon icon={ faArrowRight } style={{color: "#60a5fa",}} size='5x' beatFade/>
        </button>
    </div>
    </div>
    </div>
        <SideBar todos={todos}/>
    </div>
    )
}