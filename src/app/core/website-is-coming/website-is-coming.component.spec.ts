import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteIsComingComponent } from './website-is-coming.component';

describe('WebsiteIsComingComponent', () => {
  let component: WebsiteIsComingComponent;
  let fixture: ComponentFixture<WebsiteIsComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteIsComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteIsComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
