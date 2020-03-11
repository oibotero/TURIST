import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaisoBambuComponent } from './paraiso-bambu.component';

describe('ParaisoBambuComponent', () => {
  let component: ParaisoBambuComponent;
  let fixture: ComponentFixture<ParaisoBambuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaisoBambuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaisoBambuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
