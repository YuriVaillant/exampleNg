import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfilesComponent } from './search-profiles.component';

describe('SearchProfilesComponent', () => {
  let component: SearchProfilesComponent;
  let fixture: ComponentFixture<SearchProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
