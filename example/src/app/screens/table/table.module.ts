import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOverviewComponent } from './table-overview/table-overview.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { TableNewComponent } from './table-new/table-new.component';
import { TableComponent } from './table/table.component';
import { UIRouterModule } from "@uirouter/angular";

@NgModule({
  imports: [
    CommonModule, UIRouterModule
  ],
  declarations: [TableOverviewComponent, TableDetailComponent, TableNewComponent, TableComponent]
})
export class TableModule { }
