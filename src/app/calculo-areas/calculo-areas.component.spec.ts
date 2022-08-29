import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoAreasComponent } from './calculo-areas.component';

describe('CalculoAreasComponent', () => {
  let component: CalculoAreasComponent;
  let fixture: ComponentFixture<CalculoAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
