import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.loggedIn();
  }

  onLogOut(){
    this.auth.logout();
    this.router.navigate(['/sign-in']);
  }

}
