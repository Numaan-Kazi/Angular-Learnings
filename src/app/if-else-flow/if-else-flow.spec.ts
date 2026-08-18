import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseFlow } from './if-else-flow';

describe('IfElseFlow', () => {
  let component: IfElseFlow;
  let fixture: ComponentFixture<IfElseFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(IfElseFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
