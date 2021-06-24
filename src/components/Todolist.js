import React, { useState } from 'react';
import "./todolist.css";

function Todolist() {

  const [task, setTask]= useState("")
  const [tasklist, setTasklist]= useState([])

 const handleChange = (e) => {
   setTask(e.target.value);
 };


 //add task
 const AddTask = () => {
  if(task !== ""){
    const taskDetails = {
      id: Math.floor(Math.random() * 1000),
      value: task,
      isCompleted: false,
    }
    
    
//task list
    setTasklist([...tasklist,taskDetails]);
  }
 };

//delete task
 const deleteTask= (e,id) => {
   e.preventDefault();
   setTasklist(tasklist.filter((t) => t.id !== id));
 };


 //completed task
 const taskCompleted = (e,id) => {
   e.preventDefault();

   const element = tasklist.findIndex((elem) => elem.id === id);

   const newTaskList = [...tasklist];

   newTaskList[element] = {
   ...newTaskList[element],
     isCompleted : true,
 };

   setTasklist(newTaskList);
 }

  return (
    <div>
           <h1> Ma Todolist </h1>
<div className="todolist">
<input type="text"  class="form-control" id="text"
 placeholder="Renseigner une tache"  onChange={(e) => handleChange(e)}
 />
<button class="add-btn" type="button" onClick={AddTask}>Add</button>
<br/>
{tasklist !== [] ? (
  <ul>
    {tasklist.map((t) => (
        <li className={t.isCompleted ? "crossText" : "listitem" }>{t.value}
        <button className="completed" onClick={e => taskCompleted(e, t.id)}>Completed</button>
        <button className="delete" onClick={e => deleteTask(e, t.id)}>Delete</button>
        </li>
    ))}
  </ul>
) : null }
</div>
    </div>

); 


}
export default Todolist;
