import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailsComponent } from "./tasks/task-details/task-details.component";
import { TaskAddComponent } from "./tasks/task-add/task-add.component";
import { IsLoggedInAuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'tasks', component: TasksComponent, children: [
      { path: 'add', component: TaskAddComponent },
      { path: ':id', component: TaskDetailsComponent }
    ],
    canActivate: [IsLoggedInAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
