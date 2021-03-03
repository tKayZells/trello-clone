import React, {ReactEventHandler, SyntheticEvent, useState} from 'react'
import { Form, Formik, useField, Field } from "formik";
import {Container, Input, Button, Span} from "./AddComponent.styles"



//const CustomInput = ({ label, ...props } : any )=> {
//    const [field, meta, helpers] = useField(props);
//    
//    return (
//        <>
//            <Input  id={ props.id || props.name} { ...field } { ...props }/>
//            { 
//            meta.touched && meta.error ? 
//            <Span style={{ fontSize : '0.6rem', color : 'red', textTransform : 'lowercase' }}> { meta.error } </Span> :
//             null }
//        </>
//    )  
//}
 
interface FormikValues {
     titulo: string;
     descripcion: string;
}
interface AddTaskProps {
    addTask: AddTask;
 }

const AddComponent: React.FC<AddTaskProps> = ({addTask}) => {


const initialValues: FormikValues = {
    titulo: "",
    descripcion: "",
}


return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data:any, {setSubmitting, resetForm, })=>{
        //console.log(data)
        setSubmitting(true)
        setSubmitting(false)
        addTask(data)
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
