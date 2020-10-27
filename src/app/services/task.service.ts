import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import { Task } from "../tasks/task.model";
import { SubTask } from "../shared/sub-tasks.model";
import { File } from "../shared/files.model";




@Injectable()

export class TaskService {

  constructor(private http: HttpClient){}

  private tasks: Task[] = [
    new Task(
      'Buy Paper Towels',
      'Go to Costco and buy paper towels',
      [
        new SubTask('Get TP too'),
        new SubTask('Get gas first')
      ],
      new Date(2021, 4, 5),
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
      new Date(2021, 4, 5),
      [
        new File("Test Path 2")
      ])
  ]

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks/get');
  }


 
  getTask(index: number) {
    return this.tasks[index];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    // console.log(connection);
  }





}
