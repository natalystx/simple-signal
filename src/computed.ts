import { extractTask } from "./task";

export class Computed<T> {
  private _computeFn: () => T;
  private _stale = true;
  private _value: T | undefined;
  constructor(computeFn: () => T) {
    this._computeFn = computeFn;
    extractTask(this);
  }
  get value() {
    if (this._stale) {
      this._value = this._computeFn();
      this._stale = false;
    }
    return this._value;
  }

  execute() {
    this._computeFn();
  }

  update() {
    this._stale = true;
  }
}
