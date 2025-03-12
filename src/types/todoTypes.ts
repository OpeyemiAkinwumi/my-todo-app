export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "REMOVE_TASK"; payload: number }
  //   | { type: "SHOW_ACTIVE"; payload: number }
  //   | { type: "SHOW_COMPLETED"; payload: boolean }
  | { type: "CLEAR_COMPLETED"; payload?: boolean }
  | { type: "TOGGLE_TASK"; payload: number };
//   | { type: "TOGGLE_THEME"; payload: boolean };
