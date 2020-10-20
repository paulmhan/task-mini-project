import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    SignInComponent,
    SignUpComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
