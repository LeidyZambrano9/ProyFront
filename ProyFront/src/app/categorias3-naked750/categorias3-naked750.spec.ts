import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked750 } from './categorias3-naked750';

describe('Categorias3Naked750', () => {
  let component: Categorias3Naked750;
  let fixture: ComponentFixture<Categorias3Naked750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
