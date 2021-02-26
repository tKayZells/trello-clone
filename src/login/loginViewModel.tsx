import { IUserCredentials } from "./interfaces/IUserCredentials";
import Login from "./loginComponent";

function LoginVM(){

    const onSubmit = (values : IUserCredentials) => {
        if(JSON.stringify(values) !== JSON.stringify({ username: "demo", password : "demo"}))
        {
            alert(`Credenciales incorrectas. Prueba usando "demo" como usuario y contraseña`);
        }
    };

    return (
        <Login onSubmitHandle={onSubmit} />
    )
}

export default LoginVM;