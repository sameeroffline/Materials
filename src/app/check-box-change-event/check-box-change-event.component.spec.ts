import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxChangeEventComponent } from './check-box-change-event.component';

describe('CheckBoxChangeEventComponent', () => {
  let component: CheckBoxChangeEventComponent;
  let fixture: ComponentFixture<CheckBoxChangeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxChangeEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
