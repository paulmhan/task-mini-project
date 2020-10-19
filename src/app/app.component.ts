import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }
}
