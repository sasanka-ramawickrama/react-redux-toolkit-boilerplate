import { TodoItem } from "../interfaces/todo"

const getTodoList = (): Promise<Array<TodoItem>> => {
    return new Promise((resolve) => {
        const data: Array<TodoItem> = [
            {
                id: 1,
                isCompleted: false,
                title: 'Todo-1'
            },
            {
                id: 2,
                isCompleted: false,
                title: 'Todo-2'
            }
        ]
        // set timeout to create static loading time
        setTimeout(() => {
            resolve(data)
        }, 2500)
        
    })
}

export const todoService = {
    getTodoList
}