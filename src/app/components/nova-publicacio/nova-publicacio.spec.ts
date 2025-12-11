import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPublicacio } from './nova-publicacio';

describe('NovaPublicacio', () => {
  let component: NovaPublicacio;
  let fixture: ComponentFixture<NovaPublicacio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPublicacio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaPublicacio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
