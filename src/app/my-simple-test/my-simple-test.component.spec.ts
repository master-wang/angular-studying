import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySimpleTestComponent } from './my-simple-test.component';

describe('MySimpleTestComponent', () => {
  let component: MySimpleTestComponent;
  let fixture: ComponentFixture<MySimpleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySimpleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySimpleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
