import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesComponent } from './sistemas-ecuaciones.component';

describe('SistemasEcuacionesComponent', () => {
  let component: SistemasEcuacionesComponent;
  let fixture: ComponentFixture<SistemasEcuacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
