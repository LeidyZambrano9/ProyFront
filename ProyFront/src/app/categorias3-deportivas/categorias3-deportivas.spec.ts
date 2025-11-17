import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Deportivas } from './categorias3-deportivas';

describe('Categorias3Deportivas', () => {
  let component: Categorias3Deportivas;
  let fixture: ComponentFixture<Categorias3Deportivas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Deportivas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Deportivas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
