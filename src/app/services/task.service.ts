import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { environment } from "../../environments/environment";

import { Task } from "../tasks/task.model";
import { RestService } from '../services/rest.service';
import { SubTask } from "../shared/sub-tasks.model";





@Injectable()

export class TaskService {
  tasksChanged = new Subject<Task[]>();

  constructor(private http: HttpClient, private rest:RestService){}
  private tasks: Task[] = [];

  getTasks(): Promise<Task[]> {
    return this.rest.get(`${environment.apiURL}/tasks`);
  }

  getTaskLength(): Promise<Task[]>{
    return this.rest.get(`${environment.apiURL}/all`)
  }

  getTask(index: number){
    return this.tasks[index];
  }

  addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    let taskID = this.tasks.indexOf(task) + 1;
    task = {...task,taskID};
    return this.rest.post(`${environment.apiURL}/add`, task);
  }

  setTasks(tasks: Task[]){
    this.tasks = tasks;
  }

  deleteTask(index: number){
    this.tasks.splice(index,1);
    this.tasksChanged.next(this.tasks.slice());
    let i = index + 1;
    return this.rest.delete(`${environment.apiURL}/delete/${i}`);
  }

  getSubTasks(index: number){
    let i = index + 1;
    return this.rest.get(`${environment.apiURL}/subtasks/${i}`);
  }







}
