import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Naked250 } from './categorias3-naked250';

describe('Categorias3Naked250', () => {
  let component: Categorias3Naked250;
  let fixture: ComponentFixture<Categorias3Naked250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Naked250]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias3Naked250);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
