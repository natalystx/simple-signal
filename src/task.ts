export let RUNNER: any = null;

export const extractTask = (task: any) => {
  RUNNER = task;
  task.execute();
  RUNNER = null;
};
