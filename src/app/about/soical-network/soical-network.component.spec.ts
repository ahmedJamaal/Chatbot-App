import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoicalNetworkComponent } from './soical-network.component';

describe('SoicalNetworkComponent', () => {
  let component: SoicalNetworkComponent;
  let fixture: ComponentFixture<SoicalNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoicalNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoicalNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
