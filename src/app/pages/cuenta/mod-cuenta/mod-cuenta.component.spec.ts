import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCuentaComponent } from './mod-cuenta.component';

describe('ModCuentaComponent', () => {
  let component: ModCuentaComponent;
  let fixture: ComponentFixture<ModCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
