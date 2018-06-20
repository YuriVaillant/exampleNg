import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryShowcaseComponent } from './story-showcase.component';

describe('StoryShowcaseComponent', () => {
  let component: StoryShowcaseComponent;
  let fixture: ComponentFixture<StoryShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
