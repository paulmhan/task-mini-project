import { Component, OnInit } from '@angular/core';
import { Task } from "../task.model";
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  id: number;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.task = this.taskService.getTask(this.id);
        }
      );
    // this.taskService.getTask(1).then(res => {
    //   this.task = res;
    // })
  }

  deleteTask() {
    this.taskService.deleteTask(this.id).subscribe();
    // this.taskService.getTasks();
    this.router.navigate(['/tasks'], {relativeTo: this.route});
  }
}
