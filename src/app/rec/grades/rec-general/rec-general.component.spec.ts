import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecGeneralComponent } from './rec-general.component';

describe('RecGeneralComponent', () => {
  let component: RecGeneralComponent;
  let fixture: ComponentFixture<RecGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
