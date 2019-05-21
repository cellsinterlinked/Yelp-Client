import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpinfoComponent } from './yelpinfo.component';

describe('YelpinfoComponent', () => {
  let component: YelpinfoComponent;
  let fixture: ComponentFixture<YelpinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
