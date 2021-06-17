import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUneteComponent } from './header-unete.component';

describe('HeaderUneteComponent', () => {
  let component: HeaderUneteComponent;
  let fixture: ComponentFixture<HeaderUneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
