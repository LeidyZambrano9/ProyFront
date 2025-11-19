import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedCfmotonk400 } from './categorias4-naked-cfmotonk400';

describe('Categorias4NakedCfmotonk400', () => {
  let component: Categorias4NakedCfmotonk400;
  let fixture: ComponentFixture<Categorias4NakedCfmotonk400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedCfmotonk400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedCfmotonk400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
