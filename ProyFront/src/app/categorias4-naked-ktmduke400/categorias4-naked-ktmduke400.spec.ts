import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedKtmduke400 } from './categorias4-naked-ktmduke400';

describe('Categorias4NakedKtmduke400', () => {
  let component: Categorias4NakedKtmduke400;
  let fixture: ComponentFixture<Categorias4NakedKtmduke400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedKtmduke400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedKtmduke400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
