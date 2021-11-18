import Control from "../Control";

class Separator extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, "span", "countdown-separator", ":");
  }
}

export default Separator;
