import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearning } from './deep-learning';

describe('DeepLearning', () => {
  let component: DeepLearning;
  let fixture: ComponentFixture<DeepLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearning],
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
