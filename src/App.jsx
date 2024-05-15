import{ createContext, useState} from "react";
import Header from "./components/Header/Header";

import "../src/style/main.css";
import TaskSection from "./components/TaskSection/TaskSection";
export const Context = createContext(null)
function App() {
  const [getDark, setISDark] = useState(false);
  const [isInputValue,setIsInputValue]=useState("");
  const [isTaskId,getIsTaskId]=useState(0)
  const [isTaskArr,setIsTaskArr] =useState([])
  function task(){
   if(isInputValue!==""){
       setIsTaskArr([...isTaskArr,isInputValue])
       getIsTaskId(isTaskId+1)
   }
  } 
  function darkMode() {
    if (getDark == true) {
      setISDark(false);
    } else {
      setISDark(true);
    }
    localStorage.setItem("dark-mode", getDark); 
  }
  let bool = localStorage.getItem("dark-mode");
  return (
    <Context.Provider value={{isTaskArr,setIsTaskArr}}>
    <div className={bool == "true" ? "dark" : ""} id="wrapper">
      <Header darkMode={darkMode} bool={bool} setIsInputValue={setIsInputValue} task={task}/>
      <TaskSection />                                    
    </div>
    </Context.Provider>
  );
}

export default App;

