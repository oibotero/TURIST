import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadasRioComponent } from './cascadas-rio.component';

describe('CascadasRioComponent', () => {
  let component: CascadasRioComponent;
  let fixture: ComponentFixture<CascadasRioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadasRioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadasRioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
