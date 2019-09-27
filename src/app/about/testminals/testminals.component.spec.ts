import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestminalsComponent } from './testminals.component';

describe('TestminalsComponent', () => {
  let component: TestminalsComponent;
  let fixture: ComponentFixture<TestminalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestminalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
