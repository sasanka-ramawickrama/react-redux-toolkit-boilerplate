import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoService } from "../../services/todo";

export const fetchTodoList = createAsyncThunk(
    "todo/fetch",
    async () => {
        return await todoService.getTodoList()
    }
)