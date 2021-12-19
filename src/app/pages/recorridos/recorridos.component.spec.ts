import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecorridosComponent } from './recorridos.component';

describe('RecorridosComponent', () => {
  let component: RecorridosComponent;
  let fixture: ComponentFixture<RecorridosComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecorridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
