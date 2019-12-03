import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCliComponent } from './usuario-cli.component';

describe('UsuarioCliComponent', () => {
  let component: UsuarioCliComponent;
  let fixture: ComponentFixture<UsuarioCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
