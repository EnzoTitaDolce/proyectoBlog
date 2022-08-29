import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesDifComponent } from './ecuaciones-dif.component';

describe('EcuacionesDifComponent', () => {
  let component: EcuacionesDifComponent;
  let fixture: ComponentFixture<EcuacionesDifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuacionesDifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesDifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
