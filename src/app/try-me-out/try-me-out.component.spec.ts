import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryMeOutComponent } from './try-me-out.component';

describe('TryMeOutComponent', () => {
  let component: TryMeOutComponent;
  let fixture: ComponentFixture<TryMeOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryMeOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryMeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
