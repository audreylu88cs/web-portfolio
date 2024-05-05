import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSkillsComponent } from './web-skills.component';

describe('WebSkillsComponent', () => {
  let component: WebSkillsComponent;
  let fixture: ComponentFixture<WebSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSkillsComponent]
    });
    fixture = TestBed.createComponent(WebSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
