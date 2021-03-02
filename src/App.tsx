import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import AddComponent from './components/addComponent/AddComponent';
import {defaultTask} from  "./utils/defaultTask"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginVM from './login/loginViewModel';
import NotFoundComponent from './components/404/notFound';

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
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginVM />
        </Route>
        <Route path="/app">
          <div className="App">
            <Navbar/>
            <AddComponent addTask={addTask}/>
            <h3>trello</h3>
          </div>
        </Route>
        <Route path="*">
          <NotFoundComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
