import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsBasic } from './signals-basic';

describe('SignalsBasic', () => {
  let component: SignalsBasic;
  let fixture: ComponentFixture<SignalsBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
