import { Form, Formik } from "formik";
import InputContainer from "../components/form/container/Container.style";
import FormInput from "../components/form/Input/FormInput";
import InputButton from "../components/form/button/Button.style";
import * as CustomStyles from "./groupComponent.styles";
import TaskComponent from "../components/taskComponent/TaskComponent";
import AddComponent from "../components/addComponent/AddComponent";

interface TaskOperations {
    addTask: AddNewTask,
    removeTask: RemoveTask,
    toggleCompleted : (task:Todo)=> void
}
interface IGroupProps {
    taskList : Array<Todo>,
    editState : boolean,
    taskOperations : TaskOperations        
}

function Group( { taskList, editState, taskOperations, ...props } : IGroupProps  ) {

    return (
        <>
            <CustomStyles.Card>
                <CustomStyles.Title> Dummyd text</CustomStyles.Title>
                <CustomStyles.Bar type="dashed" />
                <CustomStyles.List>
                    <AddComponent 
                        edit={!editState}
                        addTask={taskOperations.addTask}
                    />
                    { 
                        taskList.map( (item : Todo, idx : number) => 
                        
                        <TaskComponent
                            key={idx}
                            task={item}
                            removeTask={taskOperations.removeTask}
                            toggleCompleted={taskOperations.toggleCompleted}/>
                        ) 
                    }
                </CustomStyles.List>
            </CustomStyles.Card>
            <CustomStyles.BgCard>
                <Formik 
                    initialValues={{ title : "" }}
                    onSubmit={ () => console.log("yay vehveh") }>
                    <Form>
                        <CustomStyles.Title color="#969696" style={{ fontWeight: 300 }}>Nuevo Grupo</CustomStyles.Title>
                        <InputContainer>
                            <FormInput label="Nombre" name="title" id="group_title" type="text" />
                        </InputContainer>
                        <InputContainer style={ { marginTop : '1rem'} }>
                            <InputButton type="submit" value="Agregar Grupo" style={ { alignSelf : 'auto'} } />
                        </InputContainer>
                    </Form>
                </Formik>
            </CustomStyles.BgCard>
        </>
    );
}

export default Group;