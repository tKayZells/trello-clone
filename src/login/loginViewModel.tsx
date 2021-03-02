import { IUserCredentials } from "./interfaces/IUserCredentials";
import Login from "./loginComponent";
import { useHistory } from "react-router-dom";

function LoginVM(){

    const routerHistory = useHistory();

    const onSubmit = (values : IUserCredentials) => {
        if(JSON.stringify(values) === JSON.stringify({ username: "demo", password : "demo"}))
        {
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