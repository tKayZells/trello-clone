import React from 'react'
import { Form, Formik, Field } from "formik";
import {Container, Input, Button} from "./AddComponent.styles"

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
                 
                <Form >
                    <Container>
                        <Field as={Input} type="input"  name="titulo" placeholder="titulo" value={values.titulo}/>
                        {errors.titulo}
                        <Field as={Input} type="input"  name="descripcion" placeholder="descripcion" value={values.descripcion}/>
                        {errors.descripcion}
                        <Button display={isSubmitting} type="submit">Submit</Button>
                    </Container>
                </Form>
             )
        }
     
    </Formik>
);

   
}

export default AddComponent
