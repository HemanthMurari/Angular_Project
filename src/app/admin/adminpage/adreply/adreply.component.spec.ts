import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreplyComponent } from './adreply.component';

describe('AdreplyComponent', () => {
  let component: AdreplyComponent;
  let fixture: ComponentFixture<AdreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdreplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
