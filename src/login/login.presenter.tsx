import { IUserCredentials } from "./interfaces/IUserCredentials";
import Login from "./login.view";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AuthContext } from "../common/auth.context";
import React from 'react';

class LoginPresenter extends React.Component<RouteComponentProps> {

    static contextType = AuthContext;
    
    onSubmitHandler = ( values : IUserCredentials ) : void => {
        if(JSON.stringify(values) === JSON.stringify({ username: "demo", password : "demo"}) ||
            JSON.stringify(values) === JSON.stringify({ username: "usuario2", password : "demo"}) )
        {
            this.context.signIn({ name : values.username })
            this.props.history.push('/app');
        }
        else 
        {            
            alert(`Credenciales incorrectas. Prueba usando "demo" como usuario y contraseña`);
        }
    }

    render(){
        return <Login onSubmitHandle={ this.onSubmitHandler } />
    }

}

export default withRouter(LoginPresenter);