import { HiOutlineX } from "react-icons/hi";
import { TodoAction } from "../types/todoTypes";
import { FaCheck } from "react-icons/fa";

interface TaskProps {
  id: number;

  task: string;
  completed: boolean;
  dispatch: React.Dispatch<TodoAction>;
}

function Task({ task, completed, id, dispatch }: TaskProps) {
  function isComplete(id: number) {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }
  console.log(completed);
  function handleRemoveTask(id: number) {
    dispatch({ type: "REMOVE_TASK", payload: id });
  }

  return (
    <div className="w-full h-[70px]  flex justify-start items-center gap-5  text-ligb border-b-2 cursor-pointer border-vvdgrb">
      <div
        onClick={() => isComplete(id)}
        className={`w-[20px] h-[20px] ${
          completed ? "bg-linear-to-br from-blue to-margenta" : ""
        } rounded-full border-[1px] border-dagb cursor-pointer flex justify-center items-center`}
      >
        {completed && (
          // <img src="../images/icon-sun.svg" className="w-full h-full" alt="" />
          <FaCheck color="white" size={9} />
        )}
      </div>
      <p className={`${completed ? "line-through" : "no-underline"}`}>{task}</p>
      <HiOutlineX
        onClick={() => handleRemoveTask(id)}
        size={24}
        className="ml-auto text-dagb "
      />
    </div>
  );
}

export default Task;
