import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPropertyBinding } from './signals-property-binding';

describe('SignalsPropertyBinding', () => {
  let component: SignalsPropertyBinding;
  let fixture: ComponentFixture<SignalsPropertyBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsPropertyBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsPropertyBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
