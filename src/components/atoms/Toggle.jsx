import useTheme from "../../hooks/useTheme";
const Toggle = () => {

const {darkMode,handleToggleTheme}=useTheme()

  return (
    <div className="flex items-center justify-center">
      <label className="group relative inline-flex flex-col cursor-pointer items-center">
        <input
          className="peer sr-only"
          type="checkbox"
          checked={darkMode}
          onChange={handleToggleTheme}
        />
        <div
          className="relative md:h-6 md:w-12 w-10 h-5 rounded-full 
                     border-[var(--color-accent)] dark:border-[var(--color-dark-accent)]  
                     transition-all duration-300
                     after:absolute after:left-0.5 after:top-0.5 after:md:h-5 after:md:w-5 after:h-3.5 after:w-3.5 
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
