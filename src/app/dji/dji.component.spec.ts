import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DJIComponent } from './dji.component';

describe('DJIComponent', () => {
  let component: DJIComponent;
  let fixture: ComponentFixture<DJIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DJIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DJIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
