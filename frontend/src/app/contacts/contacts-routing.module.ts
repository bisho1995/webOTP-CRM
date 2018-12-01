import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { InfoComponent } from "./info/info.component";
import { MessageComponent } from "./message/message.component";

const routes: Routes = [
  { path: "", component: ContactsComponent },
  { path: "info", component: InfoComponent },
  { path: "message", component: MessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
