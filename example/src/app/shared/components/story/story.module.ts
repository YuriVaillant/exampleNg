import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryBrowserComponent } from './story-browser/story-browser.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StorySearchComponent } from './story-search/story-search.component';
import { StoryHistoryComponent } from './story-history/story-history.component';
import { StoryShowcaseComponent } from './story-showcase/story-showcase.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoryBrowserComponent, StoryDetailsComponent, StorySearchComponent, StoryHistoryComponent, StoryShowcaseComponent]
})
export class StoryModule { }
