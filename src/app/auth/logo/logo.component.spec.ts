import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import {AppComponent} from "../../app.component";
import {AuthComponent} from "../auth.component";
import {MainComponent} from "../../main/main.component";
import {ProfileComponent} from "../../profile/profile.component";
import {DefaultComponent} from "../../default/default.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../../register/register.component";
import {AddPostsComponent} from "../../main/add-posts/add-posts.component";
import {PostsComponent} from "../../main/posts/posts.component";
import {StatusComponent} from "../../main/status/status.component";
import {ToolbarComponent} from "../../main/toolbar/toolbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "../login/login.service";
import {CommentComponent} from "../../main/comment/comment.component";

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

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
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
