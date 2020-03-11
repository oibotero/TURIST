import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiradorChipreComponent } from './mirador-chipre.component';

describe('MiradorChipreComponent', () => {
  let component: MiradorChipreComponent;
  let fixture: ComponentFixture<MiradorChipreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiradorChipreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiradorChipreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
