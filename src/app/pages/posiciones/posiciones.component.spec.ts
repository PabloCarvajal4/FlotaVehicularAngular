import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PosicionesComponent } from './posiciones.component';

describe('PosicionesComponent', () => {
  let component: PosicionesComponent;
  let fixture: ComponentFixture<PosicionesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
