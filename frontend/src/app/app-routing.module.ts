import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Error404Component } from "./error404/error404.component";

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
