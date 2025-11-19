import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedHusqvarna400 } from './categorias4-naked-husqvarna400';

describe('Categorias4NakedHusqvarna400', () => {
  let component: Categorias4NakedHusqvarna400;
  let fixture: ComponentFixture<Categorias4NakedHusqvarna400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedHusqvarna400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedHusqvarna400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
