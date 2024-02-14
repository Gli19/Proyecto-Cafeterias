import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCafeteriaComponent } from './agregar-cafeteria.component';

describe('AgregarCafeteriaComponent', () => {
  let component: AgregarCafeteriaComponent;
  let fixture: ComponentFixture<AgregarCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
