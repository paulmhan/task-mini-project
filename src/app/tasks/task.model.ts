import { Files } from "../shared/files.model";
import { SubTasks } from "../shared/sub-tasks.model"

export class Task {
  public title: string;
  public description: string;
  public subTasks: SubTasks[];
  public dueDate: Date;
  public filePaths: Files[];

  constructor(title: string, description: string, subTasks: SubTasks[], dueDate: Date, filePaths: Files[]) {
    this.title = title;
    this.description = description;
    this.subTasks = subTasks;
    this.dueDate = dueDate;
    this.filePaths = filePaths;
  }
}
