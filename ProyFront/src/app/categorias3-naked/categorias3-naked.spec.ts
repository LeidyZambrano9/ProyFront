import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked } from './categorias3-naked';

describe('Categorias3Naked', () => {
  let component: Categorias3Naked;
  let fixture: ComponentFixture<Categorias3Naked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
