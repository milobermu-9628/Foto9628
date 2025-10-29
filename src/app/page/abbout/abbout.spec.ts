import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abbout } from './abbout';

describe('Abbout', () => {
  let component: Abbout;
  let fixture: ComponentFixture<Abbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
