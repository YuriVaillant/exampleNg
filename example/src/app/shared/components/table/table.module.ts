import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableSortingRowComponent } from './table-sorting-row/table-sorting-row.component';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableHeaderComponent, TableRowComponent, TableSortingRowComponent, TableContainerComponent]
})
export class TableModule { }
