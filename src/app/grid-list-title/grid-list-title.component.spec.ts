import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListTitleComponent } from './grid-list-title.component';

describe('GridListTitleComponent', () => {
  let component: GridListTitleComponent;
  let fixture: ComponentFixture<GridListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
