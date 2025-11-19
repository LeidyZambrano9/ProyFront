import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedPulsarn125 } from './categorias4-naked-pulsarn125';

describe('Categorias4NakedPulsarn125', () => {
  let component: Categorias4NakedPulsarn125;
  let fixture: ComponentFixture<Categorias4NakedPulsarn125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedPulsarn125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedPulsarn125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
