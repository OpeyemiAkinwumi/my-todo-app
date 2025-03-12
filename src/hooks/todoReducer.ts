import { Todo, TodoAction } from "../types/todoTypes";

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  let newState;

  switch (action.type) {
    case "ADD_TASK":
      newState = [
        ...state,
        { id: state.length + 1, task: action.payload, completed: false },
      ];
      break;

    case "REMOVE_TASK":
      newState = state.filter((todo) => todo.id !== action.payload);
      break;

    case "CLEAR_COMPLETED":
      newState = state.filter((todo) => !todo.completed);
      break;

    case "TOGGLE_TASK":
      newState = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed } // ✅ Toggle completed state
          : todo
      );
      break;

    default:
      throw new Error("Invalid action type");
  }

  // ✅ Save the updated state to localStorage
  localStorage.setItem("todos", JSON.stringify(newState));
  return newState;
}
