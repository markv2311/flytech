import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutelComponent } from './autel.component';

describe('AutelComponent', () => {
  let component: AutelComponent;
  let fixture: ComponentFixture<AutelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
