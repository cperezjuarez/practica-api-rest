import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPublicacions } from './llista-publicacions';

describe('LlistaPublicacions', () => {
  let component: LlistaPublicacions;
  let fixture: ComponentFixture<LlistaPublicacions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaPublicacions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaPublicacions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
