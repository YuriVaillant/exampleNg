import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBrowserComponent } from './story-browser.component';

describe('StoryBrowserComponent', () => {
  let component: StoryBrowserComponent;
  let fixture: ComponentFixture<StoryBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
