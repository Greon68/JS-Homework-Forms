import MyPopover from "./popover";

const myPopover = new MyPopover();
myPopover.bindPopover();

// const popover = document.querySelector(".popover");
const btn = document.querySelector(".btn");

const { left, top } = btn.getBoundingClientRect();

btn.addEventListener("click", () => {
  const popover = document.querySelector(".popover");
  const btn = document.querySelector(".btn");
  // запуск всплывающего элемента через Popover API
  popover.togglePopover();
  // Позиционирование всплывающего элемента
  popover.style.top = top - popover.offsetHeight - 10 + "px";
  popover.style.left =
    left + btn.offsetWidth / 2 - popover.offsetWidth / 2 + "px";
});
