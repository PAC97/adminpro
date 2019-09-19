import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTipoServicioComponent } from './mod-tipo-servicio.component';

describe('ModTipoServicioComponent', () => {
  let component: ModTipoServicioComponent;
  let fixture: ComponentFixture<ModTipoServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModTipoServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTipoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
