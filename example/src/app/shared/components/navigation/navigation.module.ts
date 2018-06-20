import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TileContainerComponent } from './tile-container/tile-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabContainerComponent, TileContainerComponent]
})
export class NavigationModule { }
