import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLugarComponent } from './registrar-lugar.component';

describe('RegistrarLugarComponent', () => {
  let component: RegistrarLugarComponent;
  let fixture: ComponentFixture<RegistrarLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
