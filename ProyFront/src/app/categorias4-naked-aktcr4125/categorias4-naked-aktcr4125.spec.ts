import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedAktcr4125 } from './categorias4-naked-aktcr4125';

describe('Categorias4NakedAktcr4125', () => {
  let component: Categorias4NakedAktcr4125;
  let fixture: ComponentFixture<Categorias4NakedAktcr4125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedAktcr4125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedAktcr4125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
