import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { RepoService } from './repo.service';
import { StoryService } from './story.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProfileService, RepoService, StoryService]
})
export class ServicesModule { }
