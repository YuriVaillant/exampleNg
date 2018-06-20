import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TabbedViewComponent } from './tabbed-view/tabbed-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { CompositeViewComponent } from './composite-view/composite-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeViewComponent, TabbedViewComponent, TableViewComponent, CompositeViewComponent]
})
export class DetailModule { }
