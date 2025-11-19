import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedHerohunk125 } from './categorias4-naked-herohunk125';

describe('Categorias4NakedHerohunk125', () => {
  let component: Categorias4NakedHerohunk125;
  let fixture: ComponentFixture<Categorias4NakedHerohunk125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedHerohunk125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedHerohunk125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
