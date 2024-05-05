import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AppComponent} from "../../app.component";
import {AuthComponent} from "../auth.component";
import {MainComponent} from "../../main/main.component";
import {ProfileComponent} from "../../profile/profile.component";
import {DefaultComponent} from "../../default/default.component";
import {LogoComponent} from "../logo/logo.component";
import {RegisterComponent} from "../../register/register.component";
import {AddPostsComponent} from "../../main/add-posts/add-posts.component";
import {PostsComponent} from "../../main/posts/posts.component";
import {StatusComponent} from "../../main/status/status.component";
import {ToolbarComponent} from "../../main/toolbar/toolbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./login.service";
import {User} from "./User";

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [LoginService], teardown: {destroyAfterEach: false}
    });
    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });






});
