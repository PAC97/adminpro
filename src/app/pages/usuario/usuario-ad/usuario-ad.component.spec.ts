import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdComponent } from './usuario-ad.component';

describe('UsuarioAdComponent', () => {
  let component: UsuarioAdComponent;
  let fixture: ComponentFixture<UsuarioAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
