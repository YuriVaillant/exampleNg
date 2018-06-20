import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
	MenuModule
  ],
  exports: [MenuModule],
  declarations: []
})
export class ComponentsModule { }
