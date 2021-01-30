import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureCamerasComponent } from './configure-cameras.component';

describe('ConfigureCamerasComponent', () => {
  let component: ConfigureCamerasComponent;
  let fixture: ComponentFixture<ConfigureCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureCamerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
