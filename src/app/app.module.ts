import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';

import { LoklakAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FeedModule } from './feed/feed.module';
import { SearchService } from './shared/services';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule,

		LoklakAppRoutingModule,
		HomeModule,
		FeedModule
	],
	providers: [
		SearchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
