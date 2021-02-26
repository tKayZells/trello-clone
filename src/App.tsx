import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import AddComponent from './components/addComponent/AddComponent';
import {defaultTask} from  "./utils/defaultTask"

function App() {
  const [taskList, setTasklist] = useState<Array<Todo>>(defaultTask)

  const addTask: AddTask = (newTask: string)=>{
  console.log(newTask)
  setTasklist([
    ...taskList,
    {
      titulo: newTask,
      completed: false
    }
  ]);
  }
  
  return (
    <div className="App">
      <Navbar/>
      <AddComponent addTask={addTask}/>
      <h3>trello</h3>
    </div>
  );
}

export default App;
