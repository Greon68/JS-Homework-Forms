/**
 * @jest-environment jsdom
 */



import MyPopover from "../popover"

test ('Проверка содержимого всплывающего окна', ()=> {
    const myPopover = new MyPopover();
    myPopover.bindPopover();

    const popover = document.querySelector(".popover");
    expect(popover.innerHTML).toEqual(MyPopover.markup)
})