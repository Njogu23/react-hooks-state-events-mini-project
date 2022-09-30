import React from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({handleNewTask, onTaskFormSubmit, handleNewCategory}) {

  const newCategories = CATEGORIES.filter(cat => cat !== "All")

  const categoriesList = newCategories.map(cat => {
    return (
      <option value={cat}></option>
    )
  })

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {categoriesList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
