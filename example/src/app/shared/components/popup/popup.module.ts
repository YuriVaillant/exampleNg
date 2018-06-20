import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { WidgetComponent } from './widget/widget.component';
import { TabbedWidgetComponent } from './tabbed-widget/tabbed-widget.component';
import { OutlierComponent } from './outlier/outlier.component';
import { StickyComponent } from './sticky/sticky.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent, ModalComponent, PopoverComponent, WidgetComponent, TabbedWidgetComponent, OutlierComponent, StickyComponent]
})
export class PopupModule { }
