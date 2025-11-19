import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedGixxer250 } from './categorias4-naked-gixxer250';

describe('Categorias4NakedGixxer250', () => {
  let component: Categorias4NakedGixxer250;
  let fixture: ComponentFixture<Categorias4NakedGixxer250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedGixxer250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedGixxer250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
