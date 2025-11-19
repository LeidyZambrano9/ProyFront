import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedYamahafz250 } from './categorias4-naked-yamahafz250';

describe('Categorias4NakedYamahafz250', () => {
  let component: Categorias4NakedYamahafz250;
  let fixture: ComponentFixture<Categorias4NakedYamahafz250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedYamahafz250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedYamahafz250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
