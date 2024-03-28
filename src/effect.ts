import { extractTask } from "./task";

export default class Effect {
  private _fn: () => void;
  constructor(fn: () => void) {
    this._fn = fn;
    extractTask(this);
  }

  execute() {
    this._fn();
  }

  update() {
    this.execute();
  }
}
