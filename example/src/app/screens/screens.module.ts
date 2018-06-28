import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { GraphModule } from './graph/graph.module';

let modules = [TableModule, GraphModule];

@NgModule({
  imports: [
    CommonModule, ...modules
  ],
  exports: modules,
  declarations: []
})
export class ScreensModule { }
