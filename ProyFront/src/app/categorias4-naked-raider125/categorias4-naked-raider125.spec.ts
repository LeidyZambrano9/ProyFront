import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedRaider125 } from './categorias4-naked-raider125';

describe('Categorias4NakedRaider125', () => {
  let component: Categorias4NakedRaider125;
  let fixture: ComponentFixture<Categorias4NakedRaider125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedRaider125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedRaider125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
