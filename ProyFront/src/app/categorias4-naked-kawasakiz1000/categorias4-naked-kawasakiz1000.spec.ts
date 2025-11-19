import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedKawasakiz1000 } from './categorias4-naked-kawasakiz1000';

describe('Categorias4NakedKawasakiz1000', () => {
  let component: Categorias4NakedKawasakiz1000;
  let fixture: ComponentFixture<Categorias4NakedKawasakiz1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedKawasakiz1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedKawasakiz1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
