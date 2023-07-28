import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTaskTwoComponent } from './dummy-task-two.component';

describe('DummyTaskTwoComponent', () => {
  let component: DummyTaskTwoComponent;
  let fixture: ComponentFixture<DummyTaskTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTaskTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTaskTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
