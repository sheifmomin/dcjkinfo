import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPrimaryComponent } from './rec-primary.component';

describe('RecPrimaryComponent', () => {
  let component: RecPrimaryComponent;
  let fixture: ComponentFixture<RecPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
