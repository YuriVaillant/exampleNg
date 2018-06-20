import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";

import { SharedModule} from './shared/shared.module';
import { ScreensModule} from './screens/screens.module';

import { APP_STATES } from './app.states';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	SharedModule,
	ScreensModule,
	UIRouterModule.forRoot({ states: APP_STATES.MENU, useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
