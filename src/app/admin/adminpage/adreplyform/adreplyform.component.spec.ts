import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreplyformComponent } from './adreplyform.component';

describe('AdreplyformComponent', () => {
  let component: AdreplyformComponent;
  let fixture: ComponentFixture<AdreplyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdreplyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdreplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
