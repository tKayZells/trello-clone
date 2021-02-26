import { Form, Formik, useField } from "formik";
import { ILoginComponentProps } from "./interfaces/ILoginComponentProps";
import { IUserCredentials } from "./interfaces/IUserCredentials";
import * as CustomStyled from "./loginComponent.styles";


const FormInput = ( { label, ...props } : any ) => {

    const [field, meta] = useField(props);
    return (
        <>
            <CustomStyled.Label htmlFor={ props.id || props.name}>{ label }</CustomStyled.Label>
            <CustomStyled.Input id={ props.id || props.name } { ...field } { ...props } />
            { meta.touched && meta.error ? <span style={{ fontSize : '0.6rem', color : 'red', textTransform : 'lowercase' }}> { meta.error } </span> : null }
        </>
    )
}

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
                                <CustomStyled.InputContainer>
                                    <FormInput label="username" name="username" type="text" placeholder="demo" />
                                </CustomStyled.InputContainer>
                                <CustomStyled.InputContainer>
                                    <FormInput label="password" name="password" type="password" />                                    
                                </CustomStyled.InputContainer>
                                <CustomStyled.InputContainer style={{ marginTop: '1rem'}}>
                                    <CustomStyled.InputButton type="submit" value="Enviar" />
                                </CustomStyled.InputContainer>
                            </Form>
                    </Formik>
                </section>
            </CustomStyled.Card>
        </div>
    );
}

export default Login;