import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NS200 } from './categorias4-ns200';

describe('Categorias4NS200', () => {
  let component: Categorias4NS200;
  let fixture: ComponentFixture<Categorias4NS200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NS200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NS200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
