import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todologic from "./components/todologic"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Todologic/>}/>
    </Routes>
  );
}

export default App;
