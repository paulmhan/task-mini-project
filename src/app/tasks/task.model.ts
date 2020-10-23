import { File } from "../shared/files.model";
import { SubTask } from "../shared/sub-tasks.model";

export class Task {
  public title: string;
  public description: string;
  public subTasks: SubTask[];
  public dueDate: string;
  public filePaths: File[];

  constructor(title: string, description: string, subTasks: SubTask[], dueDate: string, filePaths: File[]) {
    this.title = title;
    this.description = description;
    this.subTasks = subTasks;
    this.dueDate = dueDate;
    this.filePaths = filePaths;
  }
}
