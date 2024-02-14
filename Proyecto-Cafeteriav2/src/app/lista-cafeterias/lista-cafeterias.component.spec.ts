import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCafeteriasComponent } from './lista-cafeterias.component';

describe('ListaCafeteriasComponent', () => {
  let component: ListaCafeteriasComponent;
  let fixture: ComponentFixture<ListaCafeteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCafeteriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCafeteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
