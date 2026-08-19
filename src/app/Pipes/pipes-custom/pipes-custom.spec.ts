import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCustom } from './pipes-custom';

describe('PipesCustom', () => {
  let component: PipesCustom;
  let fixture: ComponentFixture<PipesCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesCustom],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
