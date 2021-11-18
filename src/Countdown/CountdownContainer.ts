import Control from "../Control";
import Counter from "./Counter";

export default class CountdownContainer extends Control {
  day: string | void;

  hour: string | void;

  minute: string | void;

  second: string | void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "countdown-container");
    this.day = new Counter(this.node, "day").countdown();
    this.hour = new Counter(this.node, "hour").countdown();
    this.minute = new Counter(this.node, "minute").countdown();
    this.second = new Counter(this.node, "second").countdown();
  }
}
