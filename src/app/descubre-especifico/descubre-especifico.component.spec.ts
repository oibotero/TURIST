import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreEspecificoComponent } from './descubre-especifico.component';

describe('DescubreEspecificoComponent', () => {
  let component: DescubreEspecificoComponent;
  let fixture: ComponentFixture<DescubreEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescubreEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubreEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
