import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiblogsComponent } from './notiblogs.component';

describe('NotiblogsComponent', () => {
  let component: NotiblogsComponent;
  let fixture: ComponentFixture<NotiblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
