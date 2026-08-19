import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesBasic } from './pipes-basic';

describe('PipesBasic', () => {
  let component: PipesBasic;
  let fixture: ComponentFixture<PipesBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
