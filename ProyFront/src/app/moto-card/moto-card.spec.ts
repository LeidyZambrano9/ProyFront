import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoCard } from './moto-card';

describe('MotoCard', () => {
  let component: MotoCard;
  let fixture: ComponentFixture<MotoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
