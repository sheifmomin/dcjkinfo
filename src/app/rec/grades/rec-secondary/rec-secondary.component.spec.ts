import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSecondaryComponent } from './rec-secondary.component';

describe('RecSecondaryComponent', () => {
  let component: RecSecondaryComponent;
  let fixture: ComponentFixture<RecSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
