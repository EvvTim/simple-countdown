import Control from "../Control";
import Counter from "./Counter";
import Separator from "./Separator";

export default class CountdownContainer extends Control {
  day: string | void;

  hour: string | void;

  minute: string | void;

  second: string | void;

  separator: Separator;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "countdown-container");
    this.day = new Counter(this.node, "days").countdown();
    this.separator = new Separator(this.node);
    this.hour = new Counter(this.node, "hours").countdown();
    this.separator = new Separator(this.node);
    this.minute = new Counter(this.node, "minutes").countdown();
    this.separator = new Separator(this.node);
    this.second = new Counter(this.node, "seconds").countdown();
  }
}
