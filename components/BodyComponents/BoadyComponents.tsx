import React from 'react'
import ItemComponenet from '../ItemComponent/ItemComponenet'


type Task = {
    content: string
    completed: boolean;
}


type BodyComponenetType = {
    taskList: Task[]
    settaskList: (taskList: Task[]) => void
}

const BoadyComponents = ({ taskList, settaskList }: BodyComponenetType) => {
    return (
        <React.Fragment>
            {taskList.map((task: Task) => <ItemComponenet
                task={task}
                taskList={taskList}
                settaskList={(taskList: Task[]) => settaskList(taskList)}></ItemComponenet>)}
        </React.Fragment>
    )
}

export default BoadyComponents