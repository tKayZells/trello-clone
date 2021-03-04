import React from 'react'
import {Container, TopContainer, Description, BottomContainer, Button, Title, Input} from "./TaskComponent.styles"
import InputButton from "../form/button/Button.style";

export interface TaskProps {
    task: Todo;
    removeTask: RemoveTask;
    toggleCompleted: ToggleCompleted;
}
const TaskComponent: React.FC<TaskProps> = ({task, removeTask, toggleCompleted}) => {
   
    return (
        <Container>
            <TopContainer>
                <Title>{task.titulo}</Title>
                <Input type="checkbox" onChange={()=>toggleCompleted(task) } checked={task.completed}/>
            </TopContainer>
            <Description>
                {task.descripcion}
            </Description>
            <BottomContainer>
                <InputButton bg="white" hoverColor="#d9d9d9" color="black" type="submit" value="Editar" />
                <InputButton bg="white" hoverColor="#d9d9d9" color="black" onClick={()=>removeTask(task)} type="submit" value="Eliminar" />
            </BottomContainer>
        </Container>
    )
}

export default TaskComponent;
