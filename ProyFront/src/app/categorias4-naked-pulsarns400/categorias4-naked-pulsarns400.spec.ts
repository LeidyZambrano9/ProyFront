import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedPulsarns400 } from './categorias4-naked-pulsarns400';

describe('Categorias4NakedPulsarns400', () => {
  let component: Categorias4NakedPulsarns400;
  let fixture: ComponentFixture<Categorias4NakedPulsarns400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedPulsarns400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedPulsarns400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
