import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log(this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log(this.count);
  }

  get total() {
    return this.count;
  }
}

export default new Counter();
