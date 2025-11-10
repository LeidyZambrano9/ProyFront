import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasComponent } from './categorias'; // ✅ Nombre correcto del componente
import { CommonModule } from '@angular/common';

describe('CategoriasComponent', () => { // ✅ Nombre descriptivo del test
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasComponent, CommonModule] // ✅ Importar el componente y CommonModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have categories array initialized', () => {
    expect(component.categories).toBeDefined();
    expect(component.categories.length).toBeGreaterThan(0);
  });

  it('should have 6 categories', () => {
    expect(component.categories.length).toBe(6);
  });

  it('should have correct category names', () => {
    const categoryNames = component.categories.map(cat => cat.name);
    expect(categoryNames).toContain('NAKED');
    expect(categoryNames).toContain('DEPORTIVAS');
    expect(categoryNames).toContain('AUTOMATICAS');
    expect(categoryNames).toContain('ENDURO');
    expect(categoryNames).toContain('TURING');
    expect(categoryNames).toContain('ALTO CC');
  });

  it('should call selectCategory method when category is clicked', () => {
    spyOn(component, 'selectCategory');
    const testCategory = component.categories[0];
    component.selectCategory(testCategory);
    expect(component.selectCategory).toHaveBeenCalledWith(testCategory);
  });
});
