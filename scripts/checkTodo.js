import { renderTodos, todos } from "./addTodo";
import {
  checkIcons,
  deleteIcons,
  liElement,
  stateElement,
  todosBox,
} from "./elements";
import { getTodoCount } from "./getTodoCount";
import { saveInLocalStorage } from "./localStorage";
import { convertTodoState } from "./shifflTodos";

const deleteTodo = (index) => {
  const result = confirm("did you need delete this todo?");
  if (!result) return;

  todos.splice(index, 1);
  saveInLocalStorage("todos", todos);
  renderTodos(todos);
  initListeners();
  getTodoCount(todos);
};

export const checkToggle = (check, idx) => {
  check.classList.toggle("check__todo");
  todos[idx].complete = !todos[idx].complete;
  saveInLocalStorage("todos", todos);
  renderTodos(todos);
  initListeners();
};

const toggleStates = () => {
  stateElement.forEach((state) => {
    state.addEventListener("click", (e) => {
      stateElement.forEach((e) => {
        e.classList.remove("active");
      });
      state.classList.add("active");
      convertTodoState(state.innerHTML);
    });
  });
};

const dragElements = () => {
  let dragItem = null;
  todosBox.addEventListener("dragstart", function (e) {
    dragItem = e.target;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
  });

  todosBox.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(todosBox, e.clientY);
    const currentElement = document.querySelector(".dragging-over");

    if (currentElement !== afterElement) {
      if (currentElement) {
        currentElement.classList.remove("dragging-over");
      }
      if (afterElement) {
        afterElement.classList.add("dragging-over");
      }
    }
  });

  todosBox.addEventListener("drop", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(todosBox, e.clientY);
    if (afterElement !== dragItem.nextSibling) {
      todosBox.insertBefore(dragItem, afterElement);
    }
    dragItem.classList.remove("dragging-over");
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll("li:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
};

export const initListeners = () => {
  deleteIcons().forEach((deleteIcon, index) => {
    deleteIcon.addEventListener("click", () => {
      deleteTodo(index);
    });
  });

  checkIcons().forEach((check, index) => {
    check.addEventListener("click", () => {
      checkToggle(check, index);
    });
  });

  dragElements();

  toggleStates();
};
