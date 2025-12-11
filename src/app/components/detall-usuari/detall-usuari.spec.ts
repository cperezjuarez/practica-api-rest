import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallUsuari } from './detall-usuari';

describe('DetallUsuari', () => {
  let component: DetallUsuari;
  let fixture: ComponentFixture<DetallUsuari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallUsuari]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallUsuari);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
