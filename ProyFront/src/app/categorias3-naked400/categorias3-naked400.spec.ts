import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked400 } from './categorias3-naked400';

describe('Categorias3Naked400', () => {
  let component: Categorias3Naked400;
  let fixture: ComponentFixture<Categorias3Naked400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
