import React from "react";

function Task({filteredTasks, handleClick}) {
  
const task = filteredTasks.map((task, index) => { 

  return (
    <div className="task" key={index}>
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={()=> handleClick(task.text)}>X</button>
    </div>
  )})


  return <>{task}</>
}

export default Task;
