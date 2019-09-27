import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeature2Component } from './product-feature2.component';

describe('ProductFeature2Component', () => {
  let component: ProductFeature2Component;
  let fixture: ComponentFixture<ProductFeature2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFeature2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
