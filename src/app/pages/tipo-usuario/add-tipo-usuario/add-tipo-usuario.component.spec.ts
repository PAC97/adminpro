import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoUsuarioComponent } from './add-tipo-usuario.component';

describe('AddTipoUsuarioComponent', () => {
  let component: AddTipoUsuarioComponent;
  let fixture: ComponentFixture<AddTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
