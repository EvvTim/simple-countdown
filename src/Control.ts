export default class Control {
  public node: HTMLElement;

  constructor(
    parentNode: HTMLElement,
    tagName: string = "div",
    className: string = "",
    content: string = ""
  ) {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = content;
    parentNode.appendChild(el);
    this.node = el;
  }
}
