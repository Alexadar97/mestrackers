import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdtbsGanttComponent } from './hdtbs-gantt.component';

describe('HdtbsGanttComponent', () => {
  let component: HdtbsGanttComponent;
  let fixture: ComponentFixture<HdtbsGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdtbsGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdtbsGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
