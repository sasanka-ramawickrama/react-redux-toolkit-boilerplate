import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { TodoItem } from '../interfaces/todo';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TodoListItem: React.FC<{
    data: TodoItem
    onTodoDelete: () => void
    onTodoUpdate: () => void
}> = (props) => {
    const { data } = props
    return (
        <React.Fragment>
            <ListItem
                disablePadding
                secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={props.onTodoDelete}>
                        <DeleteOutlineIcon />
                    </IconButton>
                }
            >
                <ListItemButton role={undefined} onClick={props.onTodoUpdate} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={data.isCompleted}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText
                        id={`${data.id}_${data.title}`}
                        primary={data.title}
                        sx={{ textDecoration: data.isCompleted ? 'line-through': 'none' }}
                    />
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    )
}

export default TodoListItem