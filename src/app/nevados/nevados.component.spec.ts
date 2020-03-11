import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevadosComponent } from './nevados.component';

describe('NevadosComponent', () => {
  let component: NevadosComponent;
  let fixture: ComponentFixture<NevadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
