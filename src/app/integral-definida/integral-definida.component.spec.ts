import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralDefinidaComponent } from './integral-definida.component';

describe('IntegralDefinidaComponent', () => {
  let component: IntegralDefinidaComponent;
  let fixture: ComponentFixture<IntegralDefinidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegralDefinidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralDefinidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
