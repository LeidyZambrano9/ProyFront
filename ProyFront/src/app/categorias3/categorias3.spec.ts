import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3 } from './categorias3';

describe('Categorias3', () => {
  let component: Categorias3;
  let fixture: ComponentFixture<Categorias3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
