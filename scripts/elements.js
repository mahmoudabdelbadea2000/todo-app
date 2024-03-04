const App = document.querySelector("main");
const inputElement = document.querySelector(".todo__input");
const themeElement = document.querySelector(".img__toggle--dark");
const checkIcons = () => document.querySelectorAll(".todo__checkbox");
const checkIcon = document.querySelector(".todo__checkbox-main");
const deleteIcons = () => document.querySelectorAll(".delete-icon");
const todosBox = document.querySelector(".todo__box");
const deleteCompleteTodoElement = document.querySelector(".clear");
const stateElement = document.querySelectorAll(".state__item");
const todoCountElement = document.querySelector(".todo__count");
const liElement = () => document.querySelectorAll(".todo__item");

export {
  App,
  inputElement,
  themeElement,
  checkIcons,
  todosBox,
  deleteIcons,
  checkIcon,
  stateElement,
  deleteCompleteTodoElement,
  todoCountElement,
  liElement,
};
