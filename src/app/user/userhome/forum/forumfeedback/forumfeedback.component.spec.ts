import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumfeedbackComponent } from './forumfeedback.component';

describe('ForumfeedbackComponent', () => {
  let component: ForumfeedbackComponent;
  let fixture: ComponentFixture<ForumfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
