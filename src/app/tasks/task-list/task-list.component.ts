import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Task } from "../task.model";
import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: res => {
        console.log(res);
        this.tasks = res;
      },
      error: error => {
        console.log(error);
      }
    });


  }

  addTask() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
