import React from "react";
import List from '@mui/material/List';
import TodoListItem from "./TodoListItem";
import { TodoItem } from "../interfaces/todo";
import { Skeleton, Stack } from "@mui/material";

const TodoListSkeleton = () => (
    <Stack spacing={1}>
        <Skeleton variant="rectangular" height={35} />
        <Skeleton variant="rectangular" height={35} />
        <Skeleton variant="rectangular" height={35} />
    </Stack>
)

const TodoList: React.FC<{
    data: Array<TodoItem>
    isLoading: boolean
    onTodoDelete: (item: TodoItem) => void
    onTodoUpdate: (item: TodoItem) => void
}> = (props) => {
    const { data, isLoading } = props
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            { isLoading && <TodoListSkeleton />}
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