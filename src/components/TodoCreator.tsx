import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const TodoCreator: React.FC<{
    onTodoSubmit: (value: string) => void
}> = (props) => {
    const [value, setValue] = useState('')

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !!value) {
            props.onTodoSubmit(value)
            setValue('')
        }
    }

    return (
        <React.Fragment>
            <Typography mt={2}>Type and press enter to add a to-do</Typography>
            <TextField
                id="outlined-basic"
                placeholder="Type your todo here..."
                variant="outlined"
                fullWidth
                size="small"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
            />
        </React.Fragment>

    )
}

export default TodoCreator