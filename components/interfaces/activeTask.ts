import { workTask } from "./workTask";

export interface activeTask extends workTask {
  progress: number;
}
