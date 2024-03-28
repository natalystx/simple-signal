import { Computed } from "./computed";
import Effect from "./effect";
import Signal from "./signal";

let counter = new Signal(0);

const addTen = new Computed(() => counter.value + 10);

new Effect(() => {
  if (document.querySelector("button")) {
    document.querySelector(
      "button"
    )!.innerHTML = `count is ${counter.value} ${addTen.value}`;
  }
});

export const run = () => {
  document.querySelector("button")?.addEventListener("click", () => {
    counter.value += 1;
  });
};
