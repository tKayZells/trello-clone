import React from 'react'
import { Form, Formik, Field } from "formik";
import {Container, Title } from "./AddComponent.styles"
import { Input } from "../form/Input/FormInput.style";
import InputButton from "../form/button/Button.style";

interface AddTaskProps {
    addTask: AddNewTask;
    edit: boolean;
 }

const AddComponent: React.FC<AddTaskProps> = ({addTask, edit}) => {


const initialValues: Todo = {
    titulo: "",
    descripcion: "",
    completed:false,
}


return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data:Todo, {setSubmitting, resetForm, })=>{
          
        setSubmitting(true)
        addTask({
            titulo: data.titulo,
            descripcion: data.descripcion,
            completed: false
        })
        setSubmitting(false)
        resetForm()
    }}
    validate={values=>{
        const errors: Record<string, string> = {}
        if(values.titulo.includes("leo")){
            errors.titulo = "leo no es correcto";
        }
        if(!values.descripcion){
            errors.descripcion = "required";
        }
        return errors;
    } }
    >
        {
             ({values, errors, isSubmitting})=> (
                <div style={{  margin: '0.5rem'}}>
                    <Form>
                        <Title color="#969696" style={{ fontWeight: 300 }}>Nueva Tarea</Title>
                        <Container>
                            <Field as={Input} type="input"  name="titulo" placeholder="titulo" value={values.titulo}/>
                            {errors.titulo}
                            <Field as={Input} style={{marginTop : '0.5rem'}} type="input"  name="descripcion" placeholder="descripcion" value={values.descripcion}/>
                            {errors.descripcion}
                            <InputButton style={{marginTop : '0.5rem'}} type="submit" value="Agregar Tarea" />
                        </Container>
                    </Form>
                </div>
             )
        }
     
    </Formik>
);

   
}

export default AddComponent
