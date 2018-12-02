import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { InfoComponent } from "./info/info.component";
import { MessageComponent } from "./message/message.component";

import { RouteGuardService } from "../shared/guard/route-guard.service";

const routes: Routes = [
  { path: "", component: ContactsComponent },
  { path: "info", component: InfoComponent, canActivate: [RouteGuardService] },
  {
    path: "message",
    component: MessageComponent,
    canActivate: [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
