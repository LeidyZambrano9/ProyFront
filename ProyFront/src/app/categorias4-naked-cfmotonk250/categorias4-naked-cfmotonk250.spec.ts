import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedCfmotonk250 } from './categorias4-naked-cfmotonk250';

describe('Categorias4NakedCfmotonk250', () => {
  let component: Categorias4NakedCfmotonk250;
  let fixture: ComponentFixture<Categorias4NakedCfmotonk250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedCfmotonk250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedCfmotonk250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
