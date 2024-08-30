import { Button, TextField } from '@mui/material'
import React, { ChangeEventHandler, useState } from 'react'

type Task = {
    content: string
    completed: boolean;
}



type HeaderComponenetsType = {
    taskList: Task[]
    settaskList: (taskList: Task[]) => void
}

const HeaderComponenets: React.FC = ({ settaskList, taskList }: HeaderComponenetsType) => {

    const [task, settask] = useState<string>("")

    const handleOnClick = () => {
        settaskList([...taskList, { content: task, completed: false }]);
    }

    return (
        <React.Fragment>
            <TextField
                id="outlined-basic"
                label="Outlined"
                value={task}
                onChange={(e) => settask(e.target.value)}
                variant="outlined" />

            <Button variant="contained" onClick={() => handleOnClick()}>Contained</Button>
        </React.Fragment>
    )
}

export default HeaderComponenets