import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnDietComponent } from './own-diet.component';

describe('OwnDietComponent', () => {
  let component: OwnDietComponent;
  let fixture: ComponentFixture<OwnDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnDietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
