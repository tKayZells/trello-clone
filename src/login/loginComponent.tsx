import { useFormik } from "formik";
import * as CustomStyled from "./loginComponent.styles";

function Login() {

    const formik = useFormik({
        initialValues : {
            username: "",
            password: ""
        },
        onSubmit: values => console.log(values)
    });

    return (
        <div style={{ 
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
         }}>
            <CustomStyled.Card>
                <header>
                    <CustomStyled.Title>Inicio de Sesión</CustomStyled.Title>
                </header>
                <section>
                    <form onSubmit={ formik.handleSubmit }>
                        <CustomStyled.InputContainer>
                            <CustomStyled.Label>Usuario</CustomStyled.Label>
                            <CustomStyled.Input type="text" />
                        </CustomStyled.InputContainer>
                        <CustomStyled.InputContainer>
                            <CustomStyled.Label>Pass</CustomStyled.Label>
                            <CustomStyled.Input type="text" />
                        </CustomStyled.InputContainer>
                        <CustomStyled.InputContainer style={{ marginTop: '1rem'}}>
                            <CustomStyled.InputButton type="submit" value="Enviar" />
                        </CustomStyled.InputContainer>
                    </form>
                </section>
            </CustomStyled.Card>
        </div>
    );
}

export default Login;