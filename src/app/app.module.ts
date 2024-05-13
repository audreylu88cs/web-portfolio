import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent} from "./auth/login/login.component";
import { LogoComponent} from "./auth/logo/logo.component";
import { EducationComponent } from './education/education.component';
import { WebProjectsComponent } from './projects/web-projects/web-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WebSkillsComponent } from './skills/web-skills/web-skills.component';
import {RouterModule, Routes} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    NavbarComponent,
    AuthComponent,
    LoginComponent,
    LogoComponent,
    EducationComponent,
    WebProjectsComponent,
    SkillsComponent,
    WebSkillsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
