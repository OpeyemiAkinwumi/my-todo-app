// import { Todo, TodoAction } from "../types/todoTypes";

// export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
//   switch (action.type) {
//     case "ADD_TODO":{
//         const newID = state.length + 1
//       return [
//         ...state,
//         { id: newID, task: action.payload, completed: false },
//       ];}

//     case "REMOVE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);

//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     case "CLEAR_TODOS":
//       return [];

//     default:
//       return state;
//   }
// }
