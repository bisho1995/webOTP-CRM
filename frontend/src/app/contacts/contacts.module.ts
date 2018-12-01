import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts/contacts.component";
import { InfoComponent } from "./info/info.component";
import { MessageComponent } from "./message/message.component";
import { CardComponent } from "./info/card/card.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  imports: [CommonModule, ContactsRoutingModule, FormsModule, SharedModule],
  declarations: [
    ContactsComponent,
    InfoComponent,
    MessageComponent,
    CardComponent
  ]
})
export class ContactsModule {}
