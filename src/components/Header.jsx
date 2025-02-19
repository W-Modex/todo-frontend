import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/themeContext";

function Header() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const changeBtn = (e) => {
    if (e.currentTarget.checked) darkTheme();
    else lightTheme();
  }

  return (
    <div className="w-full bg-[#F7F9FC] dark:bg-[#2b3945] dark:text-[#F7F9FC]">
    <div className="flex m-auto justify-between max-w-[1400px] p-5  ">
      <h1 className="font-bold text-3xl">ModexTodoApp</h1>
      <label htmlFor="theme" className="flex items-center text-3xl cursor-pointer">
        <input type="checkbox" name="theme" id="theme" className="sr-only" onChange={changeBtn}/>
        {themeMode === "dark" ? <IoMoon className="text-[#F7F9FC]"/> : <IoSunnyOutline/>}
      </label>
    </div>
    </div>
  );
}

export default Header;
