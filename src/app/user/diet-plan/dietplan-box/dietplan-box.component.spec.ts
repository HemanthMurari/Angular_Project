import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanBoxComponent } from './dietplan-box.component';

describe('DietplanBoxComponent', () => {
  let component: DietplanBoxComponent;
  let fixture: ComponentFixture<DietplanBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplanBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
