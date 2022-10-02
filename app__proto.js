import Parent from "./app_class";

class Child extends Parent {
  constructor() {
    this.increaseHandler();
  }
  increaseHandler() {
    this._increaseBtn.addEventListener(".click", function () {
      console.log("Increased!!!");
    });
  }
}

const child1 = new Child();
