import { createContext, useContext } from "react";


export const taskContext = createContext({
    data: [],
    changeStatus: () => {},
    deleteTask: () => {},
    addNewTask: () => {},
    updateTask: () => {}
})

export const TaskProvider = taskContext.Provider;

export const useTask = () => {
    return useContext(taskContext);
}