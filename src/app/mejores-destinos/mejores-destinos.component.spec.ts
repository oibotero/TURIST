import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresDestinosComponent } from './mejores-destinos.component';

describe('MejoresDestinosComponent', () => {
  let component: MejoresDestinosComponent;
  let fixture: ComponentFixture<MejoresDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoresDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoresDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
