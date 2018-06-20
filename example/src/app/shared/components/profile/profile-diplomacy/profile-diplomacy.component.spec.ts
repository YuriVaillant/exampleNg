import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDiplomacyComponent } from './profile-diplomacy.component';

describe('ProfileDiplomacyComponent', () => {
  let component: ProfileDiplomacyComponent;
  let fixture: ComponentFixture<ProfileDiplomacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDiplomacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDiplomacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
