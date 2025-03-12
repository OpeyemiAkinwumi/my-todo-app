import { IoMoon } from "react-icons/io5";
import Task from "./Task";
import Filter from "./Filter";
import { Todo, TodoAction } from "../types/todoTypes";

interface WrapperProps {
  data: Todo[];
  // completedTask: Todo[];
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  activeState: string;

  setFilter: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<TodoAction>;
}

export default function Wrapper({
  data,
  dispatch,
  task,
  setTask,
  setFilter,
  activeState,
}: // completedTask,
WrapperProps) {
  // const numItems = data.length;

  function handleSubmit() {
    if (task.trim() === "") return; // Prevent adding empty tasks
    dispatch({ type: "ADD_TASK", payload: task });
    setTask(""); // Reset input field after adding task
  }

  return (
    <div className="w-[92%] lg:w-[40%] h-full  absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col items-start justify-start py-14 font-main">
      {/* Todo div */}
      <div className="w-full flex justify-between items-center text-white">
        <h1 className="text-4xl font-bold tracking-widest">TODO</h1>
        <IoMoon size={30} />
      </div>

      {/* Input  */}
      <div className="w-full h-[70px] rounded-lg flex justify-start items-center gap-5 bg-lg dark:bg-vdsb text-dagb mt-10 px-4 lg:px-8">
        <button
          onClick={handleSubmit}
          className="w-[20px] h-[20px] rounded-full border-[1px] border-dagb cursor-pointer "
        ></button>
        <input
          type="text"
          className="w-[80%] py-2 px-1 focus:text-ligb focus:outline-none"
          placeholder="Create a new todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      {/* Task */}

      <div
        id="wrapper"
        className="w-full mt-10 rounded-lg py-1 container bg-lg dark:bg-vdsb px-4 lg:px-8 "
      >
        {data.map((item) => (
          <Task
            key={item.id}
            task={item.task}
            id={item.id}
            completed={item.completed}
            dispatch={dispatch}
          />
        ))}
        <Filter
          data={data}
          // id={data.id}
          dispatch={dispatch}
          setFilter={setFilter}
          activeState={activeState}
          // completedTask={completedTask}
        />
      </div>

      <p className="text-dagb text-sm py-3 text-center w-full mt-auto">
        Drag and Drop to reorder list
      </p>
    </div>
  );
}
