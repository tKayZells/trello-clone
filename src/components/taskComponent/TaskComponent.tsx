import React from 'react'
import {Container, TopContainer, Description, BottomContainer, Button, Title, Input} from "./TaskComponent.styles"

interface TaskProps {
    task: Todo
}
const TaskComponent: React.FC<TaskProps> = ({task}) => {
    return (
        <Container>
            <TopContainer>
                <Title>{task.titulo}</Title>
                <Input type="checkbox" checked={task.completed}/>
            </TopContainer>
            <Description>
                {task.descripcion}
            </Description>
            <BottomContainer>
                <Button>editar</Button>
                <Button>eliminar</Button>
            </BottomContainer>
        </Container>
    )
}

export default TaskComponent;
