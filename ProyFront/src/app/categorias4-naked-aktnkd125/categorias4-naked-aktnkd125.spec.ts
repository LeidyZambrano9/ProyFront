import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedAktnkd125 } from './categorias4-naked-aktnkd125';

describe('Categorias4NakedAktnkd125', () => {
  let component: Categorias4NakedAktnkd125;
  let fixture: ComponentFixture<Categorias4NakedAktnkd125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedAktnkd125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedAktnkd125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
