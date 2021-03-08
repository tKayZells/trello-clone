
import { defaultTask } from  "../utils/defaultTask";
import { useState } from "react";
import Group from "./groupComponent";
import AddGroup from "./addGroupComponent";
import INewGroupParams from "./interfaces/INewGroupParams";

function GroupVM(){

    const [ groupList, setGroups ] = useState<Array<string>>([])
    const [taskList, setTasklist] = useState<Array<Todo>>(defaultTask);
    const [edit, setEdit] = useState<boolean>(false);
  
    const addTask: AddNewTask = (newTask: Todo)=>{
      console.log(newTask)
    setTasklist([
      ...taskList,
      newTask
    ])
    }
  
    const removeTask: RemoveTask = (task:Todo)=> {
     
      const newTaskList = taskList.filter(item => item.titulo !== task.titulo);
      setTasklist(newTaskList);
    }
  
    const toggleCompleted = (task:Todo)=> {
      const newTaskList = taskList.map(item=> {
        if(item === task){
          return{
            ...item,
            completed:!item.completed
          }
        }
        return item;
      });
      setTasklist(newTaskList);
    }
  
    const editTask = ()=>{
  
    }

    const newGroupHandler = ( values : INewGroupParams ) => { 
        setGroups([...groupList, values.title ])
        //const getNewList = taskList.filter((item)=> item.group === values.title)
        //setTasklist(getNewList)
    }

    return (
        <div style={{ display : 'flex', justifyContent : "start"}}>
            { 
                groupList.map( (group, idx) => 
                    <Group 
                        key={idx}
                        taskList={taskList} 
                        title={group}
                        editState={edit} 
                        taskOperations={{
                            addTask: addTask,
                            removeTask: removeTask,
                            toggleCompleted : toggleCompleted
                        }} />
                )
            }
            <AddGroup onSubmitHandler={ newGroupHandler } styles={{ alignSelf : "start", margin: '1rem 1.5rem' }}  />
        </div>
    )
}

export default GroupVM;