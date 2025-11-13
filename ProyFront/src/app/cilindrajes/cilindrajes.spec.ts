import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CilindrajesComponent } from './cilindrajes';
import { CommonModule } from '@angular/common';

describe('CilindrajesComponent', () => {
  let component: CilindrajesComponent;
  let fixture: ComponentFixture<CilindrajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CilindrajesComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CilindrajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cilindrajes array initialized', () => {
    expect(component.cilindrajes).toBeDefined();
    expect(component.cilindrajes.length).toBeGreaterThan(0);
  });

  it('should filter cilindrajes by category', () => {
    const testCategory = { id: 1, name: 'NAKED' };
    component.selectedCategory = testCategory;
    component.filterCilindrajes();
    
    expect(component.filteredCilindrajes.length).toBe(6);
    expect(component.filteredCilindrajes.every(c => c.categoryId === 1)).toBeTrue();
  });

  it('should emit backToCategories event when goBack is called', () => {
    spyOn(component.backToCategories, 'emit');
    component.goBack();
    expect(component.backToCategories.emit).toHaveBeenCalled();
  });

  it('should emit cilindrajeSelected event when selectCilindraje is called', () => {
    spyOn(component.cilindrajeSelected, 'emit');
    const testCilindraje = component.cilindrajes[0];
    component.selectCilindraje(testCilindraje);
    expect(component.cilindrajeSelected.emit).toHaveBeenCalledWith(testCilindraje);
  });

  it('should update filtered cilindrajes when selectedCategory changes', () => {
    const testCategory = { id: 2, name: 'DEPORTIVAS' };
    component.selectedCategory = testCategory;
    component.ngOnChanges();
    
    expect(component.filteredCilindrajes.length).toBe(6);
    expect(component.filteredCilindrajes[0].categoryId).toBe(2);
  });
});