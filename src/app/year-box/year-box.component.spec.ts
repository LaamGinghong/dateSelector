import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearBoxComponent } from './year-box.component';

describe('YearBoxComponent', () => {
  let component: YearBoxComponent;
  let fixture: ComponentFixture<YearBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
