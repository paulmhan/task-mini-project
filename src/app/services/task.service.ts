import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { environment } from "../../environments/environment";

import { Task } from "../tasks/task.model";
import { SubTask } from "../shared/sub-tasks.model";
import { File } from "../shared/files.model";





@Injectable()

export class TaskService {
  tasksChanged = new Subject<Task[]>();

  constructor(private http: HttpClient){}
  private tasks: Task[] = [];

  getTasks(): Promise<Task[]> {
    return this.http.get<Task[]>(`${environment.apiURL}/tasks/get`).toPromise();
  }

  getTask(index: number){
    return this.tasks[index];
  }

  addTask(task: Task) {
    return this.http.post<Task[]>('tasks/add', task);
  }

  setTasks(tasks: Task[]){
    this.tasks = tasks;
  }

  deleteTask(index: number): Observable<{}>{
    this.tasks.splice(index,1);
    let i = index + 1;
    this.tasksChanged.next(this.tasks.slice());
    return this.http.delete(`${environment.apiURL}/tasks/delete/${i}`);
  }





}
