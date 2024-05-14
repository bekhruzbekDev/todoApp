import Cross from "../../../public/assets/icons/cross.svg";
import PropTypes from "prop-types"
import"./taskSection.css"

const TaskSection = ({isTaskArr,setIsTaskArr}) => {
 function deleteTask(index){
 let todo = isTaskArr.filter((item,i)=> i !==index)
 setIsTaskArr(todo)
 }
  return (
    <div className="container">
    <section className="taskList">
      {isTaskArr.map((item,index) => {
        return (
          <div className="task" key={index}>
            <input type="checkbox" className="task-checkbox" id={index} />
            <label htmlFor={index} className="task-text">{item}</label>
            <span className="cross-btn" onClick={()=>deleteTask(index)}>
              <Cross />
            </span>
          </div>
        );
      })}
      {isTaskArr.length >0 && <div className="activeBar">
      <p className="taskListCount">{isTaskArr.length} items left</p>
      <nav className="navbar">
        <ul className="list">
          <li className="list-active">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
      <button className="clear">Clear Completed</button>
    <p className="footer-text">Drag and drop to reorder list</p>
    </div>}
    {isTaskArr.length>0 &&  <div className="media-bar">
      <ul className="list media-list">
          <li className="list-active">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>}
    </section>
  </div>
  )
}

export default TaskSection
TaskSection.propTypes={
    isTaskArr:PropTypes.array,
    setIsTaskArr:PropTypes.func
}