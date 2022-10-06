import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxCheckedComponent } from './check-box-checked.component';

describe('CheckBoxCheckedComponent', () => {
  let component: CheckBoxCheckedComponent;
  let fixture: ComponentFixture<CheckBoxCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
