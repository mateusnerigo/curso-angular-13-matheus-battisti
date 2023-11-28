import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmiterChangeNumberComponent } from './emmiter-change-number.component';

describe('EmmiterChangeNumberComponent', () => {
  let component: EmmiterChangeNumberComponent;
  let fixture: ComponentFixture<EmmiterChangeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmiterChangeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmiterChangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
