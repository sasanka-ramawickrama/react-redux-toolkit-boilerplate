import React from "react";
import List from '@mui/material/List';
import TodoListItem from "./TodoListItem";
import { TodoItem } from "../interfaces/todo";

const TodoList: React.FC<{
    data: Array<TodoItem>
    onTodoDelete: (item: TodoItem) => void
    onTodoUpdate: (item: TodoItem) => void
}> = (props) => {
    const { data } = props
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {data.map((i) => (
                <TodoListItem
                    key={i.id}
                    data={i}
                    onTodoDelete={() => props.onTodoDelete(i)}
                    onTodoUpdate={() => props.onTodoUpdate(i)}
                />
            ))}
        </List>
    )
}

export default TodoList