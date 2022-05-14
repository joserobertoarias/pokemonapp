import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgAlertComponent } from './msg-alert.component';

describe('MsgAlertComponent', () => {
  let component: MsgAlertComponent;
  let fixture: ComponentFixture<MsgAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
