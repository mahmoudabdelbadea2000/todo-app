import { addTask, renderTodos, todos } from "./addTodo";
import { initListeners } from "./checkTodo";
import { toggleDarkTheme } from "./darkMode";
import {
  App,
  checkIcon,
  deleteCompleteTodoElement,
  inputElement,
  themeElement,
} from "./elements";
import { getTodoCount } from "./getTodoCount";
import { getData, saveInLocalStorage } from "./localStorage";

themeElement.addEventListener("click", (e) => {
  if (App.classList.contains("isDark")) {
    e.target.src = "./images/icon-moon.svg";
  } else {
    e.target.src = "./images/icon-sun.svg";
  }
  toggleDarkTheme();
});

checkIcon.addEventListener("click", () => {
  checkIcon.classList.toggle("check__todo");
});

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (checkIcon.classList.contains("check__todo")) {
      addTask(inputElement.value, true);
    } else {
      addTask(inputElement.value, false);
    }
  }
});

deleteCompleteTodoElement.addEventListener("click", () => {
  const newTodos = todos.filter((todo) => !todo.complete);
  saveInLocalStorage("todos", newTodos);
  renderTodos(newTodos);
  getTodoCount(newTodos);
  window.location.reload();
});

const initProject = () => {
  getData("darkMode") && toggleDarkTheme();
  getData("todos") && renderTodos(todos);
  getTodoCount(todos);
  initListeners();
};

initProject();
