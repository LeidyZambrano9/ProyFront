import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4NakedKtmsuperduke1000 } from './categorias4-naked-ktmsuperduke1000';

describe('Categorias4NakedKtmsuperduke1000', () => {
  let component: Categorias4NakedKtmsuperduke1000;
  let fixture: ComponentFixture<Categorias4NakedKtmsuperduke1000>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4NakedKtmsuperduke1000]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4NakedKtmsuperduke1000);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
