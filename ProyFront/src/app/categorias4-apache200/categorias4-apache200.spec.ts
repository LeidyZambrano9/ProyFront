import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4Apache200 } from './categorias4-apache200';

describe('Categorias4Apache200', () => {
  let component: Categorias4Apache200;
  let fixture: ComponentFixture<Categorias4Apache200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4Apache200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4Apache200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
