import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4Hondacb190 } from './categorias4-hondacb190';

describe('Categorias4Hondacb190', () => {
  let component: Categorias4Hondacb190;
  let fixture: ComponentFixture<Categorias4Hondacb190>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4Hondacb190]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4Hondacb190);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
