import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalsajeSolComponent } from './balsaje-sol.component';

describe('BalsajeSolComponent', () => {
  let component: BalsajeSolComponent;
  let fixture: ComponentFixture<BalsajeSolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalsajeSolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalsajeSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
