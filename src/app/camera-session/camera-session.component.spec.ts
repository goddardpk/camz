import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSessionComponent } from './camera-session.component';

describe('CameraSessionComponent', () => {
  let component: CameraSessionComponent;
  let fixture: ComponentFixture<CameraSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
