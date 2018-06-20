import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfluxService } from './influx.service';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
	InfluxService,
	MenuService
  ]
})
export class EntitiesModule { }
