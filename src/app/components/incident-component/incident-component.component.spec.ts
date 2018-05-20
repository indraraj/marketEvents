import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentComponentComponent } from './incident-component.component';

describe('IncidentComponentComponent', () => {
  let component: IncidentComponentComponent;
  let fixture: ComponentFixture<IncidentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
