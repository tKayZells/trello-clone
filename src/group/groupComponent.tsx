import * as CustomStyles from "./groupComponent.styles";
import TaskComponent from "../components/taskComponent/TaskComponent";
import AddComponent from "../components/addComponent/AddComponent";

interface TaskOperations {
    addTask: AddNewTask,
    removeTask: RemoveTask,
    toggleCompleted : (task:Todo)=> void
}
interface IGroupProps {
    title : string,
    taskList : Array<Todo>,
    editState : boolean,
    taskOperations : TaskOperations        
}

function Group( { title, taskList, editState, taskOperations, ...props } : IGroupProps  ) {

    return (
        <>
            <CustomStyles.Card>
                <CustomStyles.Title>{ title }</CustomStyles.Title>
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
        </>
    );
}

export default Group;