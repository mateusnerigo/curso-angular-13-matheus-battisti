import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDtBindingComponent } from './two-way-dt-binding.component';

describe('TwoWayDtBindingComponent', () => {
  let component: TwoWayDtBindingComponent;
  let fixture: ComponentFixture<TwoWayDtBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDtBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDtBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
