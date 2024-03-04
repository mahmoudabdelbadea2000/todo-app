import { getData, saveInLocalStorage } from "./localStorage";
import { inputElement, todosBox } from "./elements";
import { initListeners } from "./checkTodo";
import { getTodoCount } from "./getTodoCount";

export const todos = getData("todos") || [];

export const renderTodos = (todos) => {
  let todosList = ``;
  todos.forEach((todo) => {
    todosList += `<li class="todo__item ${
      todo.complete ? "complete" : ""
    }" draggable="true">
                    <span class="todo__checkbox ${
                      todo.complete ? "check__todo" : ""
                    }">
                      <img class="todo__checkbox-image" src="/images/icon-check.svg" alt="check icon"/>
                    </span>
                    <span class="todo__text">${todo.title}</span>
                    <img src="/images/icon-cross.svg" class="delete-icon" alt="delete icon" />
                </li>`;
  });

  todosBox.innerHTML = todosList;
  inputElement.value = "";
};

export const addTask = (value, isChacked) => {
  if (!value) return;

  const todo = {
    title: value,
    complete: isChacked,
  };

  todos.push(todo);
  saveInLocalStorage("todos", todos);
  renderTodos(todos);
  initListeners();
  getTodoCount(todos);
};
