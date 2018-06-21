import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { EntitiesModule } from './entities/entities.module';
import { FilterModule } from './filter/filter.module';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

let modules = [
	ComponentsModule,
	EntitiesModule,
	FilterModule,
	PipesModule,
	ServicesModule
  ]

@NgModule({
  imports: [
    CommonModule,
	...modules
	],
  exports: modules,
  declarations: []
})
export class SharedModule { }
