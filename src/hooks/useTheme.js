import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/featuresSlice/themeSlice";

const useTheme = () => {
  const dispath = useDispatch();
  const darkMode = useSelector((state) => state.theme.DarkMode);

  useEffect(()=>{
    document.documentElement.classList.toggle("dark", darkMode);

  },[darkMode])

  const handleToggleTheme=()=>{
    dispath(toggleDarkMode())
  }
  return {handleToggleTheme,darkMode};
};

export default useTheme;
