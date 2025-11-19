import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedDucatistreetfigther1000 } from './categorias4-naked-ducatistreetfigther1000';

describe('Categorias4NakedDucatistreetfigther1000', () => {
  let component: Categorias4NakedDucatistreetfigther1000;
  let fixture: ComponentFixture<Categorias4NakedDucatistreetfigther1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedDucatistreetfigther1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedDucatistreetfigther1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
