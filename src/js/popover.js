export default class MyPopover {
  constructor() {}

  static get markup() {
    return `<h2>Apple iPhone 16 Pro Max</h2>
        <p>iPhone 16 Pro Max предоставляет пользователям новые возможности</p>
         <p> для фото- и видеосъемки со смартфона. Этому способствует </p>
         <p>ряд технологических решений,внедренных инженерами Apple.</p>
        `;
  }

  bindPopover() {
    // Cоздаём всплывающий элемент

    const popoverElement = document.createElement("DIV");
    popoverElement.classList.add("popover");
    popoverElement.popover = "manual";
    popoverElement.innerHTML = MyPopover.markup;
    document.body.append(popoverElement);
  }
}

export class Tooltip {
  constructor() {
    this._tooltips = [];
  }

  showTooltip(message, element) {
    console.log(`3.Создаём новый элемент с сообщением: ${message}`);

    const tooltipElement = document.createElement("DIV");

    tooltipElement.classList.add("form-error");
    tooltipElement.textContent = message;

    const id = performance.now();

    this._tooltips.push({
      id,
      element: tooltipElement,
      // message
    });

    // document.body.appendChild(tooltipElement);
    document.body.append(tooltipElement);

    // Выведем в консоль координаты элемента на котором не прошла валидация:
    console.log(element.getBoundingClientRect());

    const { right, top } = element.getBoundingClientRect();

    // tooltipElement.style.left = right + 5 + 'px';
    // tooltipElement.style.top = top + 'px';

    tooltipElement.style.left = right + 5 + "px";
    tooltipElement.style.top =
      top + element.offsetHeight / 2 - tooltipElement.offsetHeight / 2 + "px";

    console.log("tooltips :", this._tooltips);
    console.log(`id : ${id}`);

    return id;
  }

  removeTooltip(id) {
    console.log("Массив this._tooltips перед удалением:", this._tooltips);
    const tooltip = this._tooltips.find((t) => t.id === id);

    console.log("Элемент на удаление :", tooltip.element);

    // Удаляем элемент из HTML-вёрстки
    tooltip.element.remove();
    console.log("Сообщение удалено !");

    this._tooltips = this._tooltips.filter((t) => t.id !== id);
    console.log("Массив this._tooltips после удаления:", this._tooltips);
  }
}
