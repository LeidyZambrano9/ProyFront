import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedBmws1000 } from './categorias4-naked-bmws1000';

describe('Categorias4NakedBmws1000', () => {
  let component: Categorias4NakedBmws1000;
  let fixture: ComponentFixture<Categorias4NakedBmws1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedBmws1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedBmws1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
