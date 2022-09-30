import React from "react";
import Task from "./Task";

function TaskList({filteredTasks, handleClick}) {
  return (
    <div className="tasks">
    <Task filteredTasks={filteredTasks} handleClick={handleClick}/>
    </div>
  );
}

export default TaskList;
