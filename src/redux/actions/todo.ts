import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoService } from "../../services/";
import { TodoItem } from "../../interfaces/";

export const fetchTodoList = createAsyncThunk<Array<TodoItem>>(
    "todo/fetch",
    async () => {
        return await todoService.getTodoList()
    }
)