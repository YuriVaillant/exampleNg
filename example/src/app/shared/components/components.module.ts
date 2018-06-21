import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { CommunicationModule } from './communication/communication.module';
import { DetailModule } from './detail/detail.module';
import { HeaderModule } from './header/header.module';
import { InputModule } from './input/input.module';
import { ListModule } from './list/list.module';
import { TableModule } from './table/table.module';
import { NavigationModule } from './navigation/navigation.module';
import { PopupModule } from './popup/popup.module';

let modules = [
	MenuModule,
	CommunicationModule,
	DetailModule,
	HeaderModule,
	InputModule,
	ListModule,
	TableModule,
	NavigationModule,
	PopupModule
  ]

@NgModule({
  imports: [
    CommonModule,
	...modules],
  exports: modules,
  declarations: []
})
export class ComponentsModule { }
