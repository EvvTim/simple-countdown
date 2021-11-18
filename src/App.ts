import Control from "./Control";
import CountdownContainer from "./Countdown/CountdownContainer";

export default class App extends Control {
  private countdownContainer: CountdownContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "app");
    this.countdownContainer = new CountdownContainer(this.node);
  }
}
