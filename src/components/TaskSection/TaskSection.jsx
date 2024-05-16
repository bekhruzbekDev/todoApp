import Cross from "../../../public/assets/icons/cross.svg";
import PropTypes from "prop-types";
import "./taskSection.css";
import { useState } from "react";
const TaskSection = ({ isTaskArr, setIsTaskArr }) => {
  function deleteTask(index) {
    let todo = isTaskArr.filter((item) => item.id !== index);
    setIsTaskArr(todo);
  }
  const [isCompleted, setIsCompleted] = useState([{ text: "" }]);
  const [isActive, setIsActive] = useState([{ text: "" }]);
  function completed(e) {
    if (e.target.checked) {
      let id = Number(e.target.id);
      isTaskArr.forEach((item) => {
        if (item.id == id) {
          setIsCompleted([...isCompleted, { text: item.text, id }]);
        } else {
          setIsActive([...isActive, { text: item.text, id }]);
        }
      });
    }
  }
  const [isArray, setIsArray] = useState(false);
  let arr = isArray ? isCompleted : isTaskArr;
  return (
    <div className="container">
      <section className="taskList">
        {arr.map((item) => {
          if (item.text != "") {
            return (
              <div className="task" key={item.id}>
                <input
                  type="checkbox"
                  className="task-checkbox"
                  id={item.id}
                  onClick={completed}
                />
                <label htmlFor={item.id} className="task-text">
                  {item.text}
                </label>
                <span className="cross-btn" onClick={() => deleteTask(item.id)}>
                  <Cross />
                </span>
              </div>
            );
          }
        })}
        {arr.length > 1 && (
          <div className="activeBar">
            <p className="taskListCount">{isTaskArr.length - 1} items left</p>
            <nav className="navbar">
              <ul className="list">
                <li className="list-active" onClick={() => setIsArray(false)}>
                  All
                </li>
                <li>Active</li>
                <li onClick={() => setIsArray(true)}>Completed</li>
              </ul>
            </nav>
            <button className="clear">Clear Completed</button>
            <p className="footer-text">Drag and drop to reorder list</p>
          </div>
        )}
        {isTaskArr.length > 0 && (
          <div className="media-bar">
            <ul className="list media-list">
              <li className="list-active">All</li>
              <li>Active</li>
              <li>Completed</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskSection;
TaskSection.propTypes = {
  isTaskArr: PropTypes.array,
  setIsTaskArr: PropTypes.func,
};
