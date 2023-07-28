import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTaskOneComponent } from './dummy-task-one.component';

describe('DummyTaskOneComponent', () => {
  let component: DummyTaskOneComponent;
  let fixture: ComponentFixture<DummyTaskOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTaskOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTaskOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
