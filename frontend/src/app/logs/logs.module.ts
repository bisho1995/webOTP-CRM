import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs/logs.component';
import { ViewMessageComponent } from './view-message/view-message.component';

@NgModule({
  imports: [
    CommonModule,
    LogsRoutingModule
  ],
  declarations: [LogsComponent, ViewMessageComponent]
})
export class LogsModule { }
