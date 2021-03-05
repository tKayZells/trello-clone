import React from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import GlobalStyle from "./Global.styles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPresenter from './login/login.presenter';
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

  return (
    <>
    <GlobalStyle/>
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPresenter />
          </Route>
          <RouteGuard path="/app">
            <div className="App">
              <Navbar/>
              <GroupVM />
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
