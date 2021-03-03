import { IUserCredentials } from "./interfaces/IUserCredentials";
import Login from "./loginComponent";
import { useHistory } from "react-router-dom";
import { useAuth } from "../common/auth.context";

function LoginVM(){

    const routerHistory = useHistory();
    const auth = useAuth();
    
    const onSubmit = (values : IUserCredentials) => {
        if(JSON.stringify(values) === JSON.stringify({ username: "demo", password : "demo"}) ||
            JSON.stringify(values) === JSON.stringify({ username: "usuario2", password : "demo"}) )
        {
            auth.signIn( { name : values.username } );
            routerHistory.push('/app');
        }
        else 
        {            
            alert(`Credenciales incorrectas. Prueba usando "demo" como usuario y contraseña`);
        }
    };

    return (
        <Login onSubmitHandle={onSubmit} />
    )
}

export default LoginVM;