import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralIndefinidaComponent } from './integral-indefinida.component';

describe('IntegralIndefinidaComponent', () => {
  let component: IntegralIndefinidaComponent;
  let fixture: ComponentFixture<IntegralIndefinidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegralIndefinidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralIndefinidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
