import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedHondacb1000 } from './categorias4-naked-hondacb1000';

describe('Categorias4NakedHondacb1000', () => {
  let component: Categorias4NakedHondacb1000;
  let fixture: ComponentFixture<Categorias4NakedHondacb1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedHondacb1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedHondacb1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
