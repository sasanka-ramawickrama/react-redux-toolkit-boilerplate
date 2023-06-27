import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { useAppSelector } from "../app/hooks";

const TodoSummary: React.FC<{}> = () => {
    const todoList = useAppSelector((state) => state.todo)
    
    const [completedTodoCount, setCompletedTodoCount] = useState(0)

    React.useEffect(() => {
        const completedCount = todoList.filter(i => i.isCompleted === true)
        setCompletedTodoCount(completedCount.length)
    }, [todoList])
    
    return(
        <React.Fragment>
              <Typography variant="h6">Todo List {`(${completedTodoCount}/${todoList.length})`}</Typography>
                <Divider />
        </React.Fragment>
    )
}

export default TodoSummary