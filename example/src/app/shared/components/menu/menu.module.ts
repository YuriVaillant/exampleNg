import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PopoverTileMenuComponent } from './popover-tile-menu/popover-tile-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LeftMenuComponent,PopoverTileMenuComponent],
  declarations: [LeftMenuComponent, PopoverTileMenuComponent]
})
export class MenuModule { }
