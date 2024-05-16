import MoonIcon from "../../../public/assets/icons/moon.svg";
import SummerIcon from "../../../public/assets/icons/summer.svg";
import PropTypes from "prop-types";
import "./header.css"
const Header = ({ bool ,darkMode,setIsInputValue,task}) => {
  function Submitted(e){
    e.preventDefault()
    setIsInputValue('')
    task()
  }
  
  function inputValue(e){
    if(e.target.value !==""){
      let text =e.target.value
      setIsInputValue(text)
    }
   
  }
  function checkboxFun(){
task()  
  }
  function checked(e){
    e.target.checked= false
  }
  return (
    <header
      className={bool == "true" ? "header-dark" : "header-light"}
      id="header"
    >
      <div className="container header-container">
        <div className="title">
          <h1>TODO</h1>
          <span className="darkModeBtn" onClick={darkMode}>
            {bool == "true" ? <SummerIcon /> : <MoonIcon />}
          </span>
        </div>
        <form 
        className="todo-input"
        onSubmit={Submitted}>
          <input type="checkbox" className="checkbox" onBlur={checked} onClick={checkboxFun}/>
          <input
            type="text"
            placeholder="Create a new todo…"
            onInput={inputValue}
          />
        </form>
      </div>
    </header>
  );
};
export default Header;
Header.propTypes = {
  bool: PropTypes.string,
  darkMode:PropTypes.func,
  setIsInputValue:PropTypes.func,
  task:PropTypes.func,
};
