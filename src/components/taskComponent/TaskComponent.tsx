import React from 'react'
import {Container, TopContainer, Description, BottomContainer, Button, Title, Input} from "./TaskComponent.styles"

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
                <Button>editar</Button>
                <Button onClick={()=>removeTask(task)}>eliminar</Button>
            </BottomContainer>
        </Container>
    )
}

export default TaskComponent;
