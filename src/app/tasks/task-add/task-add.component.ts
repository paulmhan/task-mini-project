import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route })
  }

  onSubmit(){
    console.log(this.taskForm.value);
  }
  private initForm(){
    let taskName = "";
    let dueDate = "";
    let taskDescription = "";
    let subTasks = new FormArray([]);
    let files = new FormArray([]);
    // subTasks.push(
    //   new FormGroup){
    //     "subtitle": new FormControl()
    //   }
    // )
    this.taskForm = new FormGroup({
      "title": new FormControl(taskName, Validators.required),
      "dueDate": new FormControl(dueDate, Validators.required),
      "description": new FormControl(taskDescription, Validators.required),
      "subTasks": subTasks,
      "files": files
    });
  }
}
