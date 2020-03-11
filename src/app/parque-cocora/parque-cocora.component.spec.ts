import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueCocoraComponent } from './parque-cocora.component';

describe('ParqueCocoraComponent', () => {
  let component: ParqueCocoraComponent;
  let fixture: ComponentFixture<ParqueCocoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueCocoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueCocoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
