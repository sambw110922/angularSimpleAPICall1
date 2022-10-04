import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAPICallComponent } from './basic-apicall.component';

describe('BasicAPICallComponent', () => {
  let component: BasicAPICallComponent;
  let fixture: ComponentFixture<BasicAPICallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAPICallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAPICallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
