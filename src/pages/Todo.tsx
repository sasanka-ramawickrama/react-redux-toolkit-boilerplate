import React from "react";
import TodoList from "../components/TodoList";
import TodoCreator from "../components/TodoCreator";
import { Card, CardContent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { TodoItem } from "../interfaces/todo";
import { addTodo, deleteTodo, updateTodo } from "../redux/todoSlice";
import TodoSummary from "../components/TodoSummary";

const Todo: React.FC<{}> = () => {
    const todoList = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch()

    const onTodoSubmit = (data: string) => {
        const todo: TodoItem = {
            id: Math.random(),
            isCompleted: false,
            title: data
        }
        dispatch(addTodo(todo))
    }

    const onTodoDelete = (data: TodoItem) => {
        dispatch(deleteTodo(data))
    }

    const onTodoUpdate = (data: TodoItem) => {
        dispatch(updateTodo(data))
    }

    return (
        <Card sx={{ maxWidth: 460, margin: 'auto' }}>
            <CardContent>
                <TodoSummary />

                <TodoCreator
                    onTodoSubmit={onTodoSubmit}
                />
                
                <TodoList
                    data={todoList}
                    onTodoDelete={onTodoDelete}
                    onTodoUpdate={onTodoUpdate}
                />
            </CardContent>
        </Card>
    )
}

export default Todo