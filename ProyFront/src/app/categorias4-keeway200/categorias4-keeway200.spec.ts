import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4Keeway200 } from './categorias4-keeway200';

describe('Categorias4Keeway200', () => {
  let component: Categorias4Keeway200;
  let fixture: ComponentFixture<Categorias4Keeway200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4Keeway200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4Keeway200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
