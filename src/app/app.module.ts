import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';

import { TaskService } from "./services/task.service";
import { JWTService } from './services/jwt.service';
import { AuthService } from './services/auth.service';
import { RestService } from './services/rest.service';
import { IsLoggedInAuthGuardService } from './services/auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    TasksComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'generateXhrLogs', useValue: false },
    TaskService,
    RestService,
    JWTService,
    AuthService,
    IsLoggedInAuthGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
