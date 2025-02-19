import TodoCard from "./TodoCard";
import { useTask } from "../../context/tasksContext";

function TodoList() {
    const {data, deleteTask, changeStatus} = useTask();

  return (
    <div className="flex w-full flex-col gap-5 p-5">
      {data.sort((a,b) => b.id - a.id).map((task) => (
        <TodoCard
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
          deleteTask={() => deleteTask(task.id)}
          changeStatus={() => changeStatus(task.id)}
        />
      ))}
      {data.length === 0 && <h3 className="md:pt-[300px] dark:text-gray-400 text-gray-600 text-3xl text-center">You have no tasks added for now. Please add a task.</h3>}
    </div>
  );
}

export default TodoList;
