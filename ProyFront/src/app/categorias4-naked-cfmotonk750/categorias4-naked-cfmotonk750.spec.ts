import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedCfmotonk750 } from './categorias4-naked-cfmotonk750';

describe('Categorias4NakedCfmotonk750', () => {
  let component: Categorias4NakedCfmotonk750;
  let fixture: ComponentFixture<Categorias4NakedCfmotonk750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedCfmotonk750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedCfmotonk750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
