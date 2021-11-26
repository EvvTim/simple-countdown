import Control from "../Control";

class Counter extends Control {
  private readonly title: Control;

  private readonly value: Control;

  private seconds: number;

  private minutes: number;

  private hours: number;

  private days: number;

  expiredDate: number;

  countdownValue: number;

  constructor(parentNode: HTMLElement, elName: string) {
    super(parentNode, "div", `container-${elName} counter-container`);
    this.value = new Control(this.node, "h3", `value-${elName}`);
    this.title = new Control(this.node, "h2", `title-${elName}`, `${elName}`);
    this.expiredDate = new Date("May 20, 2022 00:00:00").getTime();
  }

  countdown() {
    setInterval(() => {
      if (this.title.node.innerHTML === "days")
        this.countdownValue = this.getDays();

      if (this.title.node.innerHTML === "hours")
        this.countdownValue = this.getHours();

      if (this.title.node.innerHTML === "minutes")
        this.countdownValue = this.getMinutes();

      if (this.title.node.innerHTML === "seconds")
        this.countdownValue = this.getSeconds();

      this.value.node.innerHTML = `${this.countdownValue}`;
    });
  }

  setGap() {
    const now = new Date().getTime();

    return this.expiredDate - now;
  }

  getDays() {
    return Math.floor(this.setGap() / this.setDays());
  }

  getHours() {
    return Math.floor((this.setGap() % this.setDays()) / this.setHours());
  }

  getMinutes() {
    return Math.floor((this.setGap() % this.setHours()) / this.setMinutes());
  }

  getSeconds() {
    return Math.floor((this.setGap() % this.setMinutes()) / this.setSeconds());
  }

  setSeconds() {
    this.seconds = 1000;
    return this.seconds;
  }

  setMinutes() {
    this.minutes = this.setSeconds() * 60;
    return this.minutes;
  }

  setHours() {
    this.hours = this.setMinutes() * 60;
    return this.hours;
  }

  setDays() {
    this.days = this.setHours() * 24;
    return this.days;
  }
}

export default Counter;
