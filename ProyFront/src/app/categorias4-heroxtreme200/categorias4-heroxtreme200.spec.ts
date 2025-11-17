import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias4Heroxtreme200 } from './categorias4-heroxtreme200';

describe('Categorias4Heroxtreme200', () => {
  let component: Categorias4Heroxtreme200;
  let fixture: ComponentFixture<Categorias4Heroxtreme200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias4Heroxtreme200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorias4Heroxtreme200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
