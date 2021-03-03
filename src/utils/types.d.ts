
type Todo = {
    titulo: string;
    descripcion: string;
    completed: boolean;
};

type AddNewTask = (newTask:Todo)=> void;

type RemoveTask  = (task:Todo) => void;

type ToggleCompleted = (task:Todo)=> void;
