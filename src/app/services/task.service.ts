import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { environment } from "../../environments/environment";

import { Task } from "../tasks/task.model";
import { RestService } from '../services/rest.service';
import { SubTask } from "../shared/sub-tasks.model";
import { File } from "../shared/files.model";





@Injectable()

export class TaskService {
  tasksChanged = new Subject<Task[]>();

  constructor(private http: HttpClient, private rest:RestService){}
  private tasks: Task[] = [];

  getTasks(): Promise<Task[]> {
    console.log("Get Task is hit");
    return this.rest.get(`${environment.apiURL}/tasks`);
    // return this.http.get<Task[]>(`${environment.apiURL}/tasks`).toPromise();
  }

  getTask(index: number){
    return this.tasks[index];
  }

  addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    return this.http.post<Task>(`${environment.apiURL}/tasks/add`, task).toPromise();
  }

  setTasks(tasks: Task[]){
    this.tasks = tasks;
  }

  deleteTask(index: number): Observable<{}>{
    this.tasks.splice(index,1);
    this.tasksChanged.next(this.tasks.slice());
    let i = index + 1;
    return this.http.delete(`${environment.apiURL}/tasks/delete/${i}`);
  }

  getSubTasks(index: number){
    let i = index + 1;
    return this.http.get(`${environment.apiURL}/subtasks/get/${i}`);
  }





}
