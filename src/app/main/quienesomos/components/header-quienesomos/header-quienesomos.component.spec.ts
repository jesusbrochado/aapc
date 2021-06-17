import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQuienesomosComponent } from './header-quienesomos.component';

describe('HeaderQuienesomosComponent', () => {
  let component: HeaderQuienesomosComponent;
  let fixture: ComponentFixture<HeaderQuienesomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderQuienesomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderQuienesomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
