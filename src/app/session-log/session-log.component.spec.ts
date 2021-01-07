import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLogComponent } from './session-log.component';

describe('SessionLogComponent', () => {
  let component: SessionLogComponent;
  let fixture: ComponentFixture<SessionLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
