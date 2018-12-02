import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { Error404Component } from "./error404/error404.component";
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs/docs.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Error404Component, SettingsComponent, AboutComponent, DocsComponent, PrivacyComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
