import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcommentsComponent } from './viewcomments.component';

describe('ViewcommentsComponent', () => {
  let component: ViewcommentsComponent;
  let fixture: ComponentFixture<ViewcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
