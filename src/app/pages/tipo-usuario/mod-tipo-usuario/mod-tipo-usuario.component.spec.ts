import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTipoUsuarioComponent } from './mod-tipo-usuario.component';

describe('ModTipoUsuarioComponent', () => {
  let component: ModTipoUsuarioComponent;
  let fixture: ComponentFixture<ModTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
