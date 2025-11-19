import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedHondacb750 } from './categorias4-naked-hondacb750';

describe('Categorias4NakedHondacb750', () => {
  let component: Categorias4NakedHondacb750;
  let fixture: ComponentFixture<Categorias4NakedHondacb750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedHondacb750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedHondacb750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
