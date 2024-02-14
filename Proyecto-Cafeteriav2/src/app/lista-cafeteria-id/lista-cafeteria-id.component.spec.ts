import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCafeteriaIdComponent } from './lista-cafeteria-id.component';

describe('ListaCafeteriaIdComponent', () => {
  let component: ListaCafeteriaIdComponent;
  let fixture: ComponentFixture<ListaCafeteriaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCafeteriaIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCafeteriaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
