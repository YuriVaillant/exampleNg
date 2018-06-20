import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShowcaseComponent } from './profile-showcase.component';

describe('ProfileShowcaseComponent', () => {
  let component: ProfileShowcaseComponent;
  let fixture: ComponentFixture<ProfileShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
