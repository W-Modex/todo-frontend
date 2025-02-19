import React, { useState } from "react";
import { useTask } from "../../context/tasksContext";

function AddTask() {
  const [title, setTitle] = useState("");
  const { addNewTask } = useTask();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row rounded-2xl p-5 justify-center items-center">
      <label
        className="flex flex-col md:flex-row items-center gap-4"
        htmlFor="title"
      >
        <p className="w-full text-center text-2xl font-medium">
          Add new Task:{" "}
        </p>
        <input
          value={title}
          onChange={handleChange}
          className="bg-gray-50 border md:min-w-[500px] min-h-16 text-xl border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="title"
          name="title"
          placeholder="Task Title"
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          addNewTask(title);
          setTitle("");
        }}
        className="m-5 p-5 cursor-pointer shadow-2xl hover:opacity-85 font-bold text-xl text-white rounded-2xl bg-[#50C878]"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
