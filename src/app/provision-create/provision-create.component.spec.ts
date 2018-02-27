import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionCreateComponent } from './provision-create.component';

describe('ProvisionCreateComponent', () => {
  let component: ProvisionCreateComponent;
  let fixture: ComponentFixture<ProvisionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
