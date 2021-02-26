import React, {useState} from 'react'
import { Form, Formik, useField, Field } from "formik";
import {Container, Input, Button} from "./AddComponent.styles"



const CustomInput = ({ label, ...props } : any )=> {
    const [field, meta] = useField(props);
    return (
        <>
            <Input  id={ props.id || props.name} { ...field } { ...props }/>
            { 
            meta.touched && meta.error ? 
            <span style={{ fontSize : '0.6rem', color : 'red', textTransform : 'lowercase' }}> { meta.error } </span> :
             null }
        </>
    )  
}
 
interface FormikValues {
     titulo: string;
}
interface AddTaskProps {
    addTask: AddTask;
 }

const AddComponent: React.FC<AddTaskProps> = ({addTask}) => {

const initialValues: FormikValues = {
    titulo: "",
}

const submitHandler = (values: any, actions: any)=> {
    addTask(values.titulo);
    actions.resetForm()
}



return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
    >
      <Form>
            <Container>
                <CustomInput id="titulo" name="titulo" placeholder="titulo" />
                <Button type="submit">Submit</Button>
            </Container>
      </Form>
    </Formik>
);

   
}

export default AddComponent


// <Container>
//<Formik 
//initialValues={initialValues}
//onSubmit={submitHandler}
//>
//    <Form>
//        <Input>
//            <Field id="titulo" name="titulo" placeholder="titulo" />
//        </Input>
//        <Button type="submit" >Submit</Button>
//    </Form>  
//    
//</Formik> 
//</Container>

   // interface AddComponentProps {
   //     addtask: AddTask
   // }
//
   // 

    //setNewTask(values.titulo);
        //addtask(newTask);
        //actions.resetForm()     
       // console.log("hello") 

        
    //const initialValues: FormikValues = {
    //    titulo: "",
    //}

    //    const [newTask, setNewTask] = useState("");
  
   // const submitHandler = (values: any, actions: any)=>{
   //     console.log({ values, actions });
   //    
   // }

//
//   return (
//    <Formik initialValues={initialValues}
//    onSubmit={submitHandler}
//    >
//        <Form>
//            <Field as={CustomInput} />
//            <Button type="submit">Add Task</Button>
//        </Form>
//    </Formik>
//   
//)