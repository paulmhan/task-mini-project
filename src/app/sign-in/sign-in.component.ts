import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from '../services/auth.service';
import { RestService } from '../services/rest.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  public readonly environment = environment;
  public signinForm: FormGroup;
  public loggingInError: string = '';

  constructor(
    private rest: RestService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }



  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })

  }

  onSubmit() {
    this.loggingInError = null;
    console.log(this.signinForm.value);
    this.rest
      .post(`${environment.apiURL}/auth`, this.signinForm.value)
      .then(res => {
        const { token } = res;
        this.auth.parseTokenAndSetState(token);
        this.router.navigate(['/tasks'])
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }


      })
      .catch(e => {
        this.isLoggedIn = false;
        this.loggingInError = 'Email / password not found';
        console.log("ERROR");
      });
  }
}
