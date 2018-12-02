import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogsComponent } from "./logs/logs.component";
import { ViewMessageComponent } from "./view-message/view-message.component";
import { StatsComponent } from "./stats/stats.component";

const routes: Routes = [
  { path: "", component: LogsComponent },
  { path: "view-message", component: ViewMessageComponent },
  { path: "stats", component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule {}
