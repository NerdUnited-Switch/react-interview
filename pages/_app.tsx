import "@/styles/globals.css";
import { filter, map } from "lodash";
import { v4 as uuid } from "uuid";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
/**
 * 
 - Should list existing tasks
- Should save a task when we refresh the screen, it still shows
- Ability to mark a task as complete
- Ability to mark a task as incomplete
- Ability to add a task
- Ability to delete a task
 */

interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskName, setTaskName] = useState("");


  useEffect(() => {
    const tasksList = localStorage.getItem("tasksList");
    if (tasksList) {
      setTasks(JSON.parse(tasksList));
    }
  }, [])

  const saveTasks = (tasksList: ITask[]) => {
    setTasks(tasksList);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  const handleCreateTask = () => {
    const payload = {
      id: uuid(),
      title: newTaskName,
      isCompleted: false,
    };
    saveTasks([...tasks, payload]);
    setTaskName("");
  };

  const toggleComplete = (taskId: string) => {
    const tasksPayload = map(tasks, (task: ITask) => ({
      ...task,
      isCompleted: taskId === task.id ? !task.isCompleted : task.isCompleted,
    }));
    saveTasks(tasksPayload);
  };

  const deleteTask = (taskId: string) => {
    const tasksPayload = filter(tasks, (task: ITask) => taskId !== task.id);
    saveTasks(tasksPayload);
  };

  return (
    <div>
      <div>
        <div>
          <input
            name="task"
            value={newTaskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button onClick={handleCreateTask}>Create</button>
      </div>
      <div>
        {map(tasks, (task: ITask) => (
          <div key={task.id}>
            <div>{task.title}</div>
            <div>
              <button onClick={() => toggleComplete(task.id)}>
                Mark as {task.isCompleted ? "uncomplete" : "complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
