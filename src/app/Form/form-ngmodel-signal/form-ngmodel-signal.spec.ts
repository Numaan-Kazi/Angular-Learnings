import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNgmodelSignal } from './form-ngmodel-signal';

describe('FormNgmodelSignal', () => {
  let component: FormNgmodelSignal;
  let fixture: ComponentFixture<FormNgmodelSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNgmodelSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(FormNgmodelSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
