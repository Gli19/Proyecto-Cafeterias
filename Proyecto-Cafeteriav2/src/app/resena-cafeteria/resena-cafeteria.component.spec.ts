import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaCafeteriaComponent } from './resena-cafeteria.component';

describe('ResenaCafeteriaComponent', () => {
  let component: ResenaCafeteriaComponent;
  let fixture: ComponentFixture<ResenaCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResenaCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResenaCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
