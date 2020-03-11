import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyfEspecificoComponent } from './fyf-especifico.component';

describe('FyfEspecificoComponent', () => {
  let component: FyfEspecificoComponent;
  let fixture: ComponentFixture<FyfEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyfEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyfEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
