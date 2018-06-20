import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProfilesComponent } from './related-profiles.component';

describe('RelatedProfilesComponent', () => {
  let component: RelatedProfilesComponent;
  let fixture: ComponentFixture<RelatedProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
