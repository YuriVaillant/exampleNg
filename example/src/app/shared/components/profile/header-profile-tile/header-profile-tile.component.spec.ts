import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileTileComponent } from './header-profile-tile.component';

describe('HeaderProfileTileComponent', () => {
  let component: HeaderProfileTileComponent;
  let fixture: ComponentFixture<HeaderProfileTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProfileTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
