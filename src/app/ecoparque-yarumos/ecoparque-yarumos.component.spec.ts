import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoparqueYarumosComponent } from './ecoparque-yarumos.component';

describe('EcoparqueYarumosComponent', () => {
  let component: EcoparqueYarumosComponent;
  let fixture: ComponentFixture<EcoparqueYarumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoparqueYarumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoparqueYarumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
