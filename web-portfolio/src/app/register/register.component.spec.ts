import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {ToolbarComponent} from "../../main/toolbar/toolbar.component";
import {CommentComponent} from "../../main/comment/comment.component";
import {StatusComponent} from "../../main/status/status.component";
import {RouterModule} from "@angular/router";
import {PostsComponent} from "../../main/posts/posts.component";
import {ProfileComponent} from "../../profile/profile.component";
import {LoginComponent} from "../auth/login/login.component";
import {LoginService} from "../auth/login/login.service";
import {BrowserModule} from "@angular/platform-browser";
import {MainComponent} from "../../main/main.component";
import {AppRoutingModule} from "../../app-routing.module";
import {DefaultComponent} from "../../default/default.component";
import {AddPostsComponent} from "../../main/add-posts/add-posts.component";
import {AppComponent} from "../../app.component";
import {AuthComponent} from "../auth/auth.component";
import {LogoComponent} from "../auth/logo/logo.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuthComponent,
        MainComponent,
        ProfileComponent,
        DefaultComponent,
        LoginComponent,
        LogoComponent,
        RegisterComponent,
        AddPostsComponent,
        PostsComponent,
        StatusComponent,
        ToolbarComponent,
        CommentComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [LoginService],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a  new user with no followers and no posts', ()=>{
    const service: LoginService = TestBed.get(LoginService);

    component['regForm'].value.firstname = "audrey";
    component['regForm'].value.lastname = "lu";
    component['regForm'].value.username = "afl4";
    component['regForm'].value.email = "afl4@rice.edu";
    component['regForm'].value.password = "password";
    component['regForm'].value.status = "good";

    component.submitRegister()
    service['currentUser'] = component['newUser'];
    console.log("REGISTER");
    console.log(service['currentUser']);
    console.log(component.firstname);

    expect(service['currentUser'].name).toBe(component['regForm'].value.firstname + " " + component['regForm'].value.lastname);
    expect(service['currentUser'].username).toBe(component['regForm'].value.username);
    expect(service['currentUser'].email).toBe(component['regForm'].value.email);
    expect(service['currentUser'].passwordStr).toBe(component['regForm'].value.password);
    expect(service['currentUser'].id).toBe(service['largestId'] + 1);
    expect(service['currentUser'].status).toBe(component['regForm'].value.status);
    expect(service['currentUser'].followedUsers).toEqual([]);
    expect(service['currentUser'].followedIds).toEqual([]);


  })
});
