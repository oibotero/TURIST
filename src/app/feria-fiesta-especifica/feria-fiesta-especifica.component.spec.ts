import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriaFiestaEspecificaComponent } from './feria-fiesta-especifica.component';

describe('FeriaFiestaEspecificaComponent', () => {
  let component: FeriaFiestaEspecificaComponent;
  let fixture: ComponentFixture<FeriaFiestaEspecificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriaFiestaEspecificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriaFiestaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
