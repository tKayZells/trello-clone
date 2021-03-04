
import { defaultTask } from  "../utils/defaultTask";
import { useState } from "react";
import Group from "./groupComponent";

function GroupVM(){


    const [taskList, setTasklist] = useState<Array<Todo>>(defaultTask);
    const [edit, setEdit] = useState<boolean>(false);
  
    const addTask: AddNewTask = (newTask: Todo)=>{
    setTasklist([
      ...taskList,
      newTask
    ])
    }
  
    const removeTask: RemoveTask = (task:Todo)=> {
      console.log("removiendo")
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

    
    return (
        <Group 
            taskList={taskList} 
            editState={edit} 
            taskOperations={{
                addTask: addTask,
                removeTask: removeTask,
                toggleCompleted : toggleCompleted
            }} />
    )
}

export default GroupVM;