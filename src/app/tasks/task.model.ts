import { SubTask } from "../shared/sub-tasks.model";

export class Task {
  public title: string;
  public description: string;
  public subTasks: SubTask[];
  public dueDate: Date;

  constructor(title: string, description: string, subTasks: SubTask[], dueDate: Date) {
    this.title = title;
    this.description = description;
    this.subTasks = subTasks;
    this.dueDate = dueDate;
  }
}
