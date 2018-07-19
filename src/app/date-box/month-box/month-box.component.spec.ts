import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthBoxComponent } from './month-box.component';

describe('MonthBoxComponent', () => {
  let component: MonthBoxComponent;
  let fixture: ComponentFixture<MonthBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
