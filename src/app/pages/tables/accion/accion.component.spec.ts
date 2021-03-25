import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionComponente } from './accion.component';

describe('AccionComponente', () => {
  let component: AccionComponente;
  let fixture: ComponentFixture<AccionComponente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionComponente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
