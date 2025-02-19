import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useTask } from "../../context/tasksContext";

function TodoCard({ id, title, status, changeStatus, deleteTask }) {
  const [updateInput, setUpdateInput] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const { updateTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, newTitle);
    setNewTitle("");
    setUpdateInput(false);
  };

  return (
    <div
      className={`${
        status === "completed"
          ? "bg-[#50C878]"
          : "bg-gray-300 dark:bg-[#2b3945]"
      } flex flex-col md:flex-row gap-5 p-5 items-center min-h-20 rounded-2xl justify-between`}
    >
      <div className="flex gap-2 items-center">
        <FaEdit
          className={`${updateInput ? "hidden" : ""} text-2xl cursor-pointer`}
          onClick={() => setUpdateInput((prevData) => !prevData)}
        />
        {updateInput ? (
          <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <label htmlFor="updateTask">
              <input
                name="updateTask"
                id="updateTask"
                className="bg-gray-50 border h-14 text-xl border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={newTitle ? newTitle : title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="m-5 p-5 cursor-pointer shadow-2xl hover:opacity-85 font-bold text-xl text-white rounded-2xl bg-[#50C878]"
            >
              Update
            </button>
          </form>
        ) : (
          <h4 className="md:w-xl font-bold break-all text-xl">{title}</h4>
        )}
      </div>
      <p>Status: {status}</p>
      <div className="flex md:min-w-[300px] justify-end gap-5 font-bold">
        <button
          onClick={changeStatus}
          className={`${
            status === "completed" ? "hidden" : ""
          } bg-[#50C878] p-5 rounded-2xl cursor-pointer hover:opacity-85 text-white`}
        >
          Mark as completed
        </button>
        <button
          onClick={deleteTask}
          className="bg-red-700 p-5 rounded-2xl cursor-pointer hover:bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
