import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBasicProject } from './counter-basic-project';

describe('CounterBasicProject', () => {
  let component: CounterBasicProject;
  let fixture: ComponentFixture<CounterBasicProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterBasicProject],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterBasicProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
