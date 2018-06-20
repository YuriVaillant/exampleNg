import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileTileComponent } from './header-profile-tile/header-profile-tile.component';
import { ProfileBrowserComponent } from './profile-browser/profile-browser.component';
import { SearchProfilesComponent } from './search-profiles/search-profiles.component';
import { EditProfilesComponent } from './edit-profiles/edit-profiles.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { RelatedProfilesComponent } from './related-profiles/related-profiles.component';
import { ProfileDiplomacyComponent } from './profile-diplomacy/profile-diplomacy.component';
import { ProfileInventoryComponent } from './profile-inventory/profile-inventory.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { ProfileShowcaseComponent } from './profile-showcase/profile-showcase.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderProfileTileComponent, ProfileBrowserComponent, SearchProfilesComponent, EditProfilesComponent, ProfileHomeComponent, RelatedProfilesComponent, ProfileDiplomacyComponent, ProfileInventoryComponent, ProfileHistoryComponent, ProfileShowcaseComponent, ProfileDetailsComponent]
})
export class ProfileModule { }
