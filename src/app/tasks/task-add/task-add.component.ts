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
  id: number;
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

  get subControls() { // a getter!
    return (<FormArray>this.taskForm.get('subTasks')).controls;
  }

  get fileControls() { // a getter!
    return (<FormArray>this.taskForm.get('files')).controls;
  }

  onDeleteSub(index: number){
    console.log("deleted", index);
  }

  onAddSub(){
    (<FormArray>this.taskForm.get('subTasks')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required)
      })
    );
  }

  onAddFile(){
    (<FormArray>this.taskForm.get('files')).push(
      new FormGroup({
        filePath: new FormControl(null, Validators.required)
      })
    );
  }

  private initForm(){
    let subTasks = new FormArray([]);
    let files = new FormArray([]);
    this.taskForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "dueDate": new FormControl("", Validators.required),
      "description": new FormControl("", Validators.required),
      "subTasks": subTasks,
      "files": files
    });
  }
}
