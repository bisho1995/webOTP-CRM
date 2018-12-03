import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable, ErrorHandler } from "@angular/core";
import * as Sentry from "@sentry/browser";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { Error404Component } from "./error404/error404.component";
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from "./about/about.component";
import { DocsComponent } from "./docs/docs.component";
import { PrivacyComponent } from "./privacy/privacy.component";

Sentry.init({
  dsn: "https://08499ce0ed6243449b6be9af5b820fcf@sentry.io/1335472"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SettingsComponent,
    AboutComponent,
    DocsComponent,
    PrivacyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
