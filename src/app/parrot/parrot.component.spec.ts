import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrotComponent } from './parrot.component';

describe('ParrotComponent', () => {
  let component: ParrotComponent;
  let fixture: ComponentFixture<ParrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
