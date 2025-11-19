import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedDuke250 } from './categorias4-naked-duke250';

describe('Categorias4NakedDuke250', () => {
  let component: Categorias4NakedDuke250;
  let fixture: ComponentFixture<Categorias4NakedDuke250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedDuke250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedDuke250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
