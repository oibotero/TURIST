import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarFeriasFiestasComponent } from '../registrar-ferias-fiestas/registrar-ferias-fiestas.component';

describe('RegistrarFeriasFiestasComponent', () => {
  let component: RegistrarFeriasFiestasComponent;
  let fixture: ComponentFixture<RegistrarFeriasFiestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarFeriasFiestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFeriasFiestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
