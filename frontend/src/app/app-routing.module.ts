import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Error404Component } from "./error404/error404.component";
import { AboutComponent } from "./about/about.component";
import { DocsComponent } from "./docs/docs.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "contacts",
    loadChildren: "./contacts/contacts.module#ContactsModule"
  },
  {
    path: "log",
    loadChildren: "./logs/logs.module#LogsModule"
  },
  { path: "about", component: AboutComponent },
  { path: "docs", component: DocsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "privacy", component: PrivacyComponent },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
