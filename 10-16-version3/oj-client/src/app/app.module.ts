import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import {routing} from './app.routes';

import {DataService} from './services/data.service';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { EditorComponent } from './components/editor/editor.component';


import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import{ CollaborationService} from "./services/collaboration.service";
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  },
    {
      provide: "auth",
      useClass: AuthService
    },{
      provide: "authGuard",
      useClass: AuthGuardService
    },{
      provide: "collaboration",
      useClass: CollaborationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
