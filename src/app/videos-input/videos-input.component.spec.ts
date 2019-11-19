import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosInputComponent } from './videos-input.component';

describe('VideosInputComponent', () => {
  let component: VideosInputComponent;
  let fixture: ComponentFixture<VideosInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
