import { useEffect, useReducer, useState } from "react";
import Wrapper from "./components/Wrapper";
import { todoReducer } from "./hooks/todoReducer";
import { Todo } from "./types/todoTypes";
import "./App.css";

// type FilterType = "ALL" | "ACTIVE" | "COMPLETED";

export default function App() {
  const initialState: Todo[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
  );
  const [data, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("ALL");
  // const [activeState, setActiveState] = useState("all");
  let activeState = "all";

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]); // ✅ Update localStorage whenever `data` changes

  const filteredData =
    filter === "active"
      ? showActiveTasks(data)
      : filter === "completed"
      ? showCompletedTasks(data)
      : showAllTasks(data);

  // Function to show all tasks
  function showAllTasks(data: Todo[]) {
    activeState = "all";
    return data; // Returns all tasks
  }

  // Function to show only active (incomplete) tasks
  function showActiveTasks(data: Todo[]) {
    activeState = "active";
    return data.filter((task) => !task.completed);
  }

  // let completedTask: Todo[] = [];
  // Function to show only completed tasks
  function showCompletedTasks(data: Todo[]) {
    activeState = "completed";
    return data.filter((task) => task.completed);
  }
  // const completedTask = showActiveTasks(data);

  return (
    <main className="w-full h-screen relative">
      <section className="w-full h-[35%] bg-[url(/images/bg-mobile-light.jpg)] dark:bg-[url(/images/bg-mobile-dark.jpg)] lg:bg-[url(/images/bg-desktop-light.jpg)] dark:lg:bg-[url(/images/bg-desktop-dark.jpg)] bg-cover bg-center  "></section>
      <section className="w-full h-[65%] bg-lg dark:bg-vdb "></section>

      <Wrapper
        data={filteredData}
        dispatch={dispatch}
        task={task}
        setTask={setTask}
        setFilter={setFilter}
        activeState={activeState}
        // completedTask={completedTask}
      />
    </main>
  );
}
