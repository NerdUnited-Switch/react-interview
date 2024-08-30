import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';

type Task = {
    content: string
    completed: boolean;
}


type ItemComponenetType = {
    task: Task
    taskList: Task[]
    settaskList: (taskList: Task[]) => void
}
const ItemComponenet = ({ task, taskList, settaskList }: ItemComponenetType) => {

    const handleMarkAsInComplete = () => {
        const taskOld = taskList.find((t) => t.content === task.content)
        const newTaskData = taskList.filter((t: Task) => t.content !== task.content);
        settaskList([...newTaskData, { ...taskOld, completed: false } as Task])
    }


    const handleMarkAsComplete = () => {
        const taskOld = taskList.find((t) => t.content === task.content)
        const newTaskData = taskList.filter((t: Task) => t.content !== task.content);
        settaskList([...newTaskData, { ...taskOld, completed: true } as Task])
    }

    const { completed, content } = task
    return (
        <>
            <Card style={{ marginTop: "20px" }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Delete</Button>
                    {completed ?
                        <Button
                            size="small"
                            variant="contained"
                            onClick={() => handleMarkAsInComplete()}
                        >InCompplte</Button> :
                        <Button size="small" variant="contained" onClick={() => handleMarkAsComplete()}> Complete</Button>}

                </CardActions>
            </Card>
        </>
    )
}

export default ItemComponenet