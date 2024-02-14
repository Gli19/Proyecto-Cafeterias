import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgregarComponent } from './vista-agregar.component';

describe('VistaAgregarComponent', () => {
  let component: VistaAgregarComponent;
  let fixture: ComponentFixture<VistaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaAgregarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
