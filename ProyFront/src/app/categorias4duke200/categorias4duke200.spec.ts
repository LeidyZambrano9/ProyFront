import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4duke200 } from './categorias4duke200';

describe('Categorias4duke200', () => {
  let component: Categorias4duke200;
  let fixture: ComponentFixture<Categorias4duke200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4duke200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4duke200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
