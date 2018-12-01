import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogsComponent } from "./logs/logs.component";
import { ViewMessageComponent } from "./view-message/view-message.component";

const routes: Routes = [
  { path: "", component: LogsComponent },
  { path: "view-message", component: ViewMessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule {}
