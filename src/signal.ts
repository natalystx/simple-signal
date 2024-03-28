import { RUNNER } from "./task";

export default class Signal<T> {
  private _value: T;
  private _dependencies = new Set<any>();

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value() {
    if (RUNNER) {
      this._dependencies.add(RUNNER);
    }
    return this._value;
  }

  set value(newValue: T) {
    if (Object.is(newValue, this._value)) return;
    this._value = newValue;
    this._publish();
  }

  private _publish() {
    this._dependencies.forEach((runner) => {
      runner.update();
    });
  }
}
