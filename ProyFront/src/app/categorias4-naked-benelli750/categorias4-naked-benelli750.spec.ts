import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedBenelli750 } from './categorias4-naked-benelli750';

describe('Categorias4NakedBenelli750', () => {
  let component: Categorias4NakedBenelli750;
  let fixture: ComponentFixture<Categorias4NakedBenelli750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedBenelli750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedBenelli750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
