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
  Redirect
} from "react-router-dom";
import LoginVM from './login/loginViewModel';
import NotFoundComponent from './components/404/notFound';
import { AuthProvider, useAuth } from "./common/auth.context";
import GroupVM from './group/groupViewModel';

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
  const [taskList, setTasklist] = useState<Array<Todo>>(defaultTask)

  const addTask: AddTask = (newTask: string)=>{
  console.log(newTask)
  setTasklist([
    ...taskList,
    {
      titulo: newTask,
      descripcion: "",
      completed: false
    }
  ]);
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
          <Route path="/g">
            <GroupVM />
          </Route>
          <RouteGuard path="/app">
            <div className="App">
              <Navbar/>
              <AddComponent addTask={addTask}/>
              <h3>trello</h3>
              {
              taskList.map((item, index)=> (
                <>
                <TaskComponent
                 key={index}
                task={item}/>
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
