import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicService1Component } from './basic-service1.component';

describe('BasicService1Component', () => {
  let component: BasicService1Component;
  let fixture: ComponentFixture<BasicService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicService1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
