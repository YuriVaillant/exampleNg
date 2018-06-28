import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphOverviewComponent } from './graph-overview/graph-overview.component';
import { GraphDetailComponent } from './graph-detail/graph-detail.component';
import { GraphNewComponent } from './graph-new/graph-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
   declarations: [GraphOverviewComponent, GraphDetailComponent, GraphNewComponent]
})
export class GraphModule { }
