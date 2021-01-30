import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateCamerasComponent } from './activate-cameras.component';

describe('ActivateCamerasComponent', () => {
  let component: ActivateCamerasComponent;
  let fixture: ComponentFixture<ActivateCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateCamerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
