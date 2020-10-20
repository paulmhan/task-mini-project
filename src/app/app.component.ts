import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
    // (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
