import { Todo, TodoAction } from "../types/todoTypes";

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: state.length + 1, task: action.payload, completed: false },
      ];

    case "REMOVE_TASK":
      return state.filter((todo) => todo.id !== action.payload);

    //   case "SHOW_ACTIVE":
    // This should not modify the state, instead, UI should handle filtering
    // return state;

    //   case "SHOW_COMPLETED":
    // Same as above, UI should handle filtering
    // return state;

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    case "TOGGLE_TASK":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed } // Toggle completed state
          : todo
      );

    default:
      throw new Error("Invalid action type");
  }
}
