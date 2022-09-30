import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS }); 

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
  const [newTask, setNewTask] = useState("")
  const [newCategory, setNewCategory] = useState("code")
  

  const handleClick = (text) => {
    const newArray = tasks.filter(item => item.text !== text)
  setTasks(newArray)
}

const filteredTasks = tasks.filter(task => {
  if(filterBy === "All"){
    return true
  }else {
    return task.category === filterBy
  }
})

const handleBtnClick = (e) => {
  e.target.classList.toggle("selected")
  setFilterBy(e.target.textContent)
  
}


const handleClassBlur = (e) => e.target.classList.remove("selected")


const categories= CATEGORIES.map((cat, index) => {
  return (
   <button key={index} onBlur={handleClassBlur} onClick={handleBtnClick}>{cat}</button>
   )
})



const handleNewTask = (e) => setNewTask(e.target.value)

const handleNewCategory = (e) => setNewCategory(e.target.value)

const onTaskFormSubmit = (e) => {
  e.preventDefault()
  const newData = {
    text:newTask,
    category:newCategory,
   
  }
 
  const newTaskArray = [...tasks, newData]
  setTasks(newTaskArray)
  setNewTask("")
  setNewCategory("")
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}/>
      <NewTaskForm handleNewCategory={handleNewCategory} handleNewTask={handleNewTask} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList filteredTasks={filteredTasks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
