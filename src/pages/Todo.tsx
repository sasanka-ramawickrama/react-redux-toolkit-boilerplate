import React from "react";
import TodoList from "../components/TodoList";
import TodoCreator from "../components/TodoCreator";
import { Card, CardContent } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { TodoItem } from "../interfaces/";
import { addTodo, deleteTodo, updateTodo } from "../redux/slices/";
import TodoSummary from "../components/TodoSummary";
import { fetchTodoList } from "../redux/actions/";
import { useDispatch } from "react-redux";

const Todo: React.FC<{}> = () => {
    const todoList = useAppSelector((state) => state.todo)
    const dispatch = useDispatch<any>()

    // trigger data fetch action
    React.useEffect(() => {
        dispatch(fetchTodoList())
    }, [])

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
                    data={todoList.data}
                    isLoading={todoList.isLoading}
                    onTodoDelete={onTodoDelete}
                    onTodoUpdate={onTodoUpdate}
                />
            </CardContent>
        </Card>
    )
}

export default Todo