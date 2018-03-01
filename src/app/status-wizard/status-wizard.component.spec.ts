import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWizardComponent } from './status-wizard.component';

describe('StatusWizardComponent', () => {
  let component: StatusWizardComponent;
  let fixture: ComponentFixture<StatusWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
