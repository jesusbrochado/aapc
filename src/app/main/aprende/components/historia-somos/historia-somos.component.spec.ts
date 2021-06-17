import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaSomosComponent } from './historia-somos.component';

describe('HistoriaSomosComponent', () => {
  let component: HistoriaSomosComponent;
  let fixture: ComponentFixture<HistoriaSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
