import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedApachertr400 } from './categorias4-naked-apachertr400';

describe('Categorias4NakedApachertr400', () => {
  let component: Categorias4NakedApachertr400;
  let fixture: ComponentFixture<Categorias4NakedApachertr400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedApachertr400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedApachertr400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
