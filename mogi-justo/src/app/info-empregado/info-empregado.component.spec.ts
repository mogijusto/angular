import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmpregadoComponent } from './info-empregado.component';

describe('InfoEmpregadoComponent', () => {
  let component: InfoEmpregadoComponent;
  let fixture: ComponentFixture<InfoEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
