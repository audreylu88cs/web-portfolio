import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import { AIProjectsComponent } from './projects/aiprojects/aiprojects.component';
import { WebProjectsComponent } from './projects/web-projects/web-projects.component';

const routes: Routes = [
  // {path: "", redirectTo: "/home", pathMatch:"full"},
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'web-projects', component: WebProjectsComponent},
  {path: 'aiprojects', component: AIProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
