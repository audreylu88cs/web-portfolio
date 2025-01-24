import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIProjectsComponent } from './aiprojects.component';

describe('AIProjectsComponent', () => {
  let component: AIProjectsComponent;
  let fixture: ComponentFixture<AIProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIProjectsComponent]
    });
    fixture = TestBed.createComponent(AIProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
