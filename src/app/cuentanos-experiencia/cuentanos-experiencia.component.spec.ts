import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentanosExperienciaComponent } from './cuentanos-experiencia.component';

describe('CuentanosExperienciaComponent', () => {
  let component: CuentanosExperienciaComponent;
  let fixture: ComponentFixture<CuentanosExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentanosExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentanosExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
