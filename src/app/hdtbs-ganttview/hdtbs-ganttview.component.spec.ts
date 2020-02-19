import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdtbsGanttviewComponent } from './hdtbs-ganttview.component';

describe('HdtbsGanttviewComponent', () => {
  let component: HdtbsGanttviewComponent;
  let fixture: ComponentFixture<HdtbsGanttviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdtbsGanttviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdtbsGanttviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
