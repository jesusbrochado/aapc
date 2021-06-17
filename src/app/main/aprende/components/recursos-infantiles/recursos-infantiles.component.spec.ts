import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosInfantilesComponent } from './recursos-infantiles.component';

describe('RecursosInfantilesComponent', () => {
  let component: RecursosInfantilesComponent;
  let fixture: ComponentFixture<RecursosInfantilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosInfantilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosInfantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
