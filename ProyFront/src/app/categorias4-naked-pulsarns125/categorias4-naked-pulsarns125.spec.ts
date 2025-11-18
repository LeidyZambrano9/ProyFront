import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedPulsarns125 } from './categorias4-naked-pulsarns125';

describe('Categorias4NakedPulsarns125', () => {
  let component: Categorias4NakedPulsarns125;
  let fixture: ComponentFixture<Categorias4NakedPulsarns125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedPulsarns125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedPulsarns125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
