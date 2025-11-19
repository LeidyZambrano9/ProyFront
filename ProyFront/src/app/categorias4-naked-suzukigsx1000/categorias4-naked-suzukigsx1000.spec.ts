import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedSuzukigsx1000 } from './categorias4-naked-suzukigsx1000';

describe('Categorias4NakedSuzukigsx1000', () => {
  let component: Categorias4NakedSuzukigsx1000;
  let fixture: ComponentFixture<Categorias4NakedSuzukigsx1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedSuzukigsx1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedSuzukigsx1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
