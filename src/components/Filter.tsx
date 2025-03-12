// import { useState } from "react";
// import { useState } from "react";
import { Todo, TodoAction } from "../types/todoTypes";

interface FilterProps {
  data: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  activeState: string;
}

function Filter({ data, setFilter, activeState, dispatch }: FilterProps) {
  // state management
  // const [activeButton, setActiveButton] = useState();
  const numItems = data.length;

  function handleClearCompletedTask() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  return (
    <div className="w-full grid grid-cols-3 text-dagb text-xs lg:text-sm py-3  ">
      <p className="hover:text-ligb-hover transition-all duration-300 cursor-pointer active:text-blue">
        {numItems} item{numItems > 1 ? "s" : ""}
      </p>

      <div className="flex justify-center items-center gap-2 lg:gap-4">
        <button
          onClick={() => setFilter("all")}
          className={`hover:text-ligb-hover transition-all duration-300 cursor-pointer ${
            activeState === "all" ? "text-blue" : ""
          } `}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`hover:text-ligb-hover transition-all duration-300 cursor-pointer ${
            activeState === "active" ? "text-blue" : ""
          } `}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`hover:text-ligb-hover transition-all duration-300 cursor-pointer ${
            activeState === "completed" ? "text-blue" : ""
          } `}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => handleClearCompletedTask()}
        className="text-right hover:text-ligb-hover transition-all duration-300 cursor-pointer active:text-blue"
      >
        Clear completed
      </button>
    </div>
  );
}

export default Filter;
