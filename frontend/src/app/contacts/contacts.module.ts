import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts/contacts.component";
import { InfoComponent } from "./info/info.component";
import { MessageComponent } from "./message/message.component";
import { CardComponent } from './info/card/card.component';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule, FormsModule],
  declarations: [ContactsComponent, InfoComponent, MessageComponent, CardComponent]
})
export class ContactsModule {}
