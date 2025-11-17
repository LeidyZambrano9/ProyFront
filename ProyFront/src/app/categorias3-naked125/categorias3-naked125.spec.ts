import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked125 } from './categorias3-naked125';

describe('Categorias3Naked125', () => {
  let component: Categorias3Naked125;
  let fixture: ComponentFixture<Categorias3Naked125>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked125]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked125);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
