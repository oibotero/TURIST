import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermalesComponent } from './termales.component';

describe('TermalesComponent', () => {
  let component: TermalesComponent;
  let fixture: ComponentFixture<TermalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
