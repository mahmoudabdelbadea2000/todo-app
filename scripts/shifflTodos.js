import { liElement } from "./elements";

export const convertTodoState = (value) => {
  liElement().forEach((li) => {
    if (!li.classList.contains("complete") && value === "Completed") {
      li.classList.add("hidden");
    } else if (li.classList.contains("complete") && value === "Active") {
      li.classList.add("hidden");
    } else {
      li.classList.remove("hidden");
    }
  });
};
