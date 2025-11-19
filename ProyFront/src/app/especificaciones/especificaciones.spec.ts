import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Especificaciones } from './especificaciones';

describe('Especificaciones', () => {
  let component: Especificaciones;
  let fixture: ComponentFixture<Especificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Especificaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Especificaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
