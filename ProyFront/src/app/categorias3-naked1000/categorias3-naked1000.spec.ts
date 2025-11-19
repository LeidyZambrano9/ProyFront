import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked1000 } from './categorias3-naked1000';

describe('Categorias3Naked1000', () => {
  let component: Categorias3Naked1000;
  let fixture: ComponentFixture<Categorias3Naked1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
