import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import AddComponent from './components/addComponent/AddComponent';
import TaskComponent from "./components/taskComponent/TaskComponent"
import {defaultTask} from  "./utils/defaultTask"
import GlobalStyle from "./Global.styles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginVM from './login/loginViewModel';
import NotFoundComponent from './components/404/notFound';
import { AuthProvider, useAuth } from "./common/auth.context";

const RouteGuard = ({ children, ...props } : any) => {
  
  const auth = useAuth();

  return (
    <Route { ...props } 
      render={ ({ location }) =>
        auth.user ? ( children ) :
          ( <Redirect to={{ pathname : "/", state : { from : location } }} />)
      }
    />
  );
}

function App() {
  const [taskList, setTasklist] = useState<Array<Todo>>(defaultTask);
  const [edit, setEdit] = useState<boolean>(false);

  const addTask: AddNewTask = (newTask: Todo)=>{
  setTasklist([
    ...taskList,
    newTask
  ])
  }

  const removeTask: RemoveTask = (task:Todo)=> {
    console.log("removiendo")
    const newTaskList = taskList.filter(item => item.titulo !== task.titulo);
    setTasklist(newTaskList);
  }

  const toggleCompleted = (task:Todo)=> {
    const newTaskList = taskList.map(item=> {
      if(item === task){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item;
    });
    setTasklist(newTaskList);
  }

  const editTask = ()=>{

  }
  
  return (
    <>
    <GlobalStyle/>
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginVM />
          </Route>
          <RouteGuard path="/app">
            <div className="App">
              <Navbar/>
              <AddComponent 
              edit={!edit}
              addTask={addTask}
              />
              <h3>trello</h3>
              {
              taskList.map((item, index)=> (
                <>
                <TaskComponent
                 key={index}
                task={item}
                removeTask={removeTask}
                toggleCompleted={toggleCompleted}/>
                </>
              ))
            }
            </div>
          </RouteGuard>
          <Route path="*">
            <NotFoundComponent />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
