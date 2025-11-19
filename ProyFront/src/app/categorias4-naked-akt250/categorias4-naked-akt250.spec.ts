import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedAkt250 } from './categorias4-naked-akt250';

describe('Categorias4NakedAkt250', () => {
  let component: Categorias4NakedAkt250;
  let fixture: ComponentFixture<Categorias4NakedAkt250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedAkt250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedAkt250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
