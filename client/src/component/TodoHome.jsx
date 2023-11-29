import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/task/taskSlice.js";
import { useState } from "react";

export default function TodoHome() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [taskText, setTaskText] = useState("");

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), text: taskText }));
    setTaskText("");
  };

  const handleDeleteTask = (taskId) =>{
    dispatch(deleteTask(taskId))
  }

  return (
    <div>
      <form className="mt-8 flex justify-center gap-2">
        <input
          value={taskText}
          onChange={handleChange}
          className="bg-slate-100 rounded-lg p-2 w-72"
          type="text"
          id="task"
          placeholder="Enter the task"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-600 p-2 rounded-lg hover:opacity-90 px-4 text-white"
        >
          Add
        </button>
      </form>
      <div className="mt-10">
        <h1 className="text-2xl">List of tasks</h1>
        <ul className="flex flex-col">
          {tasks.map((task)=>(
            <li className=" text-lg py-1 flex justify-between" key={task.id}>{task.text}
            <button onClick={() => handleDeleteTask(task.id)} className="bg-red-600 hover:opacity-80 text-white rounded-lg text-lg font-semibold p-1 ">Delete</button>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}
