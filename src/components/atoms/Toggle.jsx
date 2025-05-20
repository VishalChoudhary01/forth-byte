import React,{useEffect} from "react";
import {toggleDarkMode} from "./../../redux/featuresSlice/themeSlice";
import { useSelector,useDispatch } from "react-redux";
const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.DarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleDarkmode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="flex items-center justify-center">
      <label className="group relative inline-flex flex-col cursor-pointer items-center">
        <input
          className="peer sr-only"
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkmode}
        />
        <div
          className="relative h-6 w-12 rounded-full 
                     border-[var(--color-accent)] dark:border-[var(--color-dark-accent)]  
                     transition-all duration-300
                     after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 
                     after:rounded-full 
                     after:bg-ToggleKnob dark:after:bg-darkToggleKnob
                     after:shadow-[1px_1px_4px_rgba(0,0,0,0.3)] 
                     after:transition-all after:duration-300 
                     peer-checked:bg-[var(--color-dark-background)] 
                     dark:peer-checked:bg-[var(--color-dark-surface)]
                     peer-checked:after:translate-x-6 
                     hover:after:scale-95 active:after:scale-90"
        >
          <span className="absolute inset-0 rounded-full  dark:bg-linear-to-tr bg-linear-to-tl from-ToggleBg to-ToggleBg3 via-ToggleBg2 from-20% border border-ToggleBg dark:border-darkToggleBg dark:from-darkToggleBg  dark:via-transparent dark:to-transparent" />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
