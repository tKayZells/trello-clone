import { Form, Formik } from "formik";
import { ILoginComponentProps } from "./interfaces/ILoginComponentProps";
import { IUserCredentials } from "./interfaces/IUserCredentials";
import InputContainer from "../components/form/container/Container.style";
import FormInput from "../components/form/Input/FormInput";
import InputButton from "../components/form/button/Button.style";
import * as CustomStyled from "./login.styles";


function Login( { onSubmitHandle, ...props } : ILoginComponentProps ) {

    const validate = ( values : any ) => {
        const errors : { [ k : string ] : any } = {};
        
        if(!values.username){
            errors.username = 'Required';
        }

        if(!values.password){
            errors.password = 'Required';
        }

        return errors;
    };

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
                    <Formik 
                        initialValues = {{
                            username: "",
                            password: ""
                        }}
                        validate={ validate }
                        onSubmit={ (values : IUserCredentials) => onSubmitHandle(values) }>
                            <Form id="login_form" aria-label="Iniciar sesion">
                                <InputContainer>
                                    <FormInput label="username" name="username" type="text" placeholder="demo" />
                                </InputContainer>
                                <InputContainer>
                                    <FormInput label="password" name="password" type="password" />                                    
                                </InputContainer>
                                <InputContainer style={{ marginTop: '1rem'}}>
                                    <InputButton type="submit" value="Enviar" />
                                </InputContainer>
                            </Form>
                    </Formik>
                </section>
            </CustomStyled.Card>
        </div>
    );
}

export default Login;