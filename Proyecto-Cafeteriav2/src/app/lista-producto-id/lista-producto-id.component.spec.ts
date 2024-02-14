import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductoIdComponent } from './lista-producto-id.component';

describe('ListaProductoIdComponent', () => {
  let component: ListaProductoIdComponent;
  let fixture: ComponentFixture<ListaProductoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaProductoIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
