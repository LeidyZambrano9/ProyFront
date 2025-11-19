import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedApriliasilver750 } from './categorias4-naked-apriliasilver750';

describe('Categorias4NakedApriliasilver750', () => {
  let component: Categorias4NakedApriliasilver750;
  let fixture: ComponentFixture<Categorias4NakedApriliasilver750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedApriliasilver750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedApriliasilver750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
