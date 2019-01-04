import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnLibComponent } from './mn-lib.component';

describe('MnLibComponent', () => {
  let component: MnLibComponent;
  let fixture: ComponentFixture<MnLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
