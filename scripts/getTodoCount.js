import { todoCountElement } from "./elements";

export const getTodoCount = (todos) => {
  todoCountElement.innerHTML = `${todos.length} items left`;
};
