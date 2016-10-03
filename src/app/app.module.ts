import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LoklakAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SearchService } from './shared/services';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpModule,

		LoklakAppRoutingModule,
		HomeModule
	],
	providers: [
		SearchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
