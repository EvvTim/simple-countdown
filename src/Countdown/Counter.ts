import Control from "../Control";

class Counter extends Control {
  private readonly title: Control;

  private readonly value: Control;

  private readonly seconds: number;

  private readonly minutes: number;

  private readonly hours: number;

  private readonly days: number;

  expiredDate: number;

  constructor(parentNode: HTMLElement, elName: string) {
    super(parentNode, "div", `container-${elName} counter-container`);
    this.value = new Control(this.node, "h3", `value-${elName}`);
    this.title = new Control(this.node, "h2", `title-${elName}`, `${elName}`);
    this.seconds = 1000;
    this.minutes = this.seconds * 60;
    this.hours = this.minutes * 60;
    this.days = this.hours * 24;
    this.expiredDate = new Date("November 22, 2022 00:00:00").getTime();
  }

  countdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const gap = this.expiredDate - now;

      const Day = Math.floor(gap / this.days);
      const Hour = Math.floor((gap % this.days) / this.hours);
      const Minute = Math.floor((gap % this.hours) / this.minutes);
      const Second = Math.floor((gap % this.minutes) / this.seconds);

      let value;

      if (this.title.node.innerHTML === "days") {
        value = Day;
      } else if (this.title.node.innerHTML === "hours") {
        value = Hour;
      } else if (this.title.node.innerHTML === "minutes") {
        value = Minute;
      } else if (this.title.node.innerHTML === "seconds") {
        value = Second;
      }

      return (this.value.node.innerHTML = `${value}`);
    });
  }
}

export default Counter;
