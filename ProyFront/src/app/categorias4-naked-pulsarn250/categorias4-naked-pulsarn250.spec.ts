import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedPulsarn250 } from './categorias4-naked-pulsarn250';

describe('Categorias4NakedPulsarn250', () => {
  let component: Categorias4NakedPulsarn250;
  let fixture: ComponentFixture<Categorias4NakedPulsarn250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedPulsarn250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedPulsarn250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
