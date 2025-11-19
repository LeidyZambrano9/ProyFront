import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedSuzukigsr750 } from './categorias4-naked-suzukigsr750';

describe('Categorias4NakedSuzukigsr750', () => {
  let component: Categorias4NakedSuzukigsr750;
  let fixture: ComponentFixture<Categorias4NakedSuzukigsr750>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedSuzukigsr750]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedSuzukigsr750);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
