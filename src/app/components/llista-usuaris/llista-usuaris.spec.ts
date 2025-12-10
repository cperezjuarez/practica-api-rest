import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaUsuaris } from './llista-usuaris';

describe('LlistaUsuaris', () => {
  let component: LlistaUsuaris;
  let fixture: ComponentFixture<LlistaUsuaris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaUsuaris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaUsuaris);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
