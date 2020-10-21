import { Injectable } from '@angular/core';
import { Task } from "../tasks/task.model";
import { SubTask } from "../shared/sub-tasks.model";
import { File } from "../shared/files.model";


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [
    new Task(
      'Buy Paper Towels',
      'Go to Costco and buy paper towels',
      [
        new SubTask('Get TP too'),
        new SubTask('Get gas first')
      ],
      new Date(),
      [
        new File("Test Path")
      ]),

    new Task(
      'Walk the dogs',
      'The dogs need to be walked at 3pm',
      [
        new SubTask('Play fetch at the park'),
        new SubTask('Give pets')
      ],
      new Date(),
      [
        new File("Test Path 2")
      ])
  ]

  getTasks() {
    return this.tasks.slice();
  }

  getTask(index: number) {
    return this.tasks[index];
  }

  addTask(task: Task){
    this.tasks.push(task);
  }

  



}
