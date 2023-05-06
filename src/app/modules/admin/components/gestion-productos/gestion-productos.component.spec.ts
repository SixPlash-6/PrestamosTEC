import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductosComponent } from './gestion-productos.component';

describe('GestionClientesComponent', () => {
  let component: GestionProductosComponent;
  let fixture: ComponentFixture<GestionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionProductosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GestionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
