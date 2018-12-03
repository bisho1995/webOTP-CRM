import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartModule } from "angular-highcharts";

import { LogsRoutingModule } from "./logs-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LogsComponent } from "./logs/logs.component";
import { ViewMessageComponent } from "./view-message/view-message.component";
import { StatsComponent } from "./stats/stats.component";

@NgModule({
  imports: [CommonModule, LogsRoutingModule, SharedModule, ChartModule],
  declarations: [LogsComponent, ViewMessageComponent, StatsComponent]
})
export class LogsModule {}
