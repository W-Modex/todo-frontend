import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import Header from "./components/Header";
import { TaskProvider } from "./context/tasksContext";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ?  JSON.parse(storedData) : [];
  });

  function lightTheme() {
    setThemeMode("light");
  }
  function darkTheme() {
    setThemeMode("dark");
  }

  const changeStatus = (id) => {
    const newData = data.map((task) => {
      if (task.id === id) {
        return { ...task, status: "completed" };
      }
      return task;
    });
    setData(newData);
  };
  const deleteTask = (id) => {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
  };
  const addNewTask = (title) => {
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      status: "pending",
    };
    setData((prevData) => [...prevData, newTask]);
    console.log(data);
  };

  const updateTask = (taskId, newTitle) => {
    if (!newTitle) return;

    setData((prevData) =>
      prevData.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <TaskProvider
          value={{ data, changeStatus, deleteTask, addNewTask, updateTask }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </TaskProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
