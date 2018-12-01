import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent, InfoComponent, MessageComponent]
})
export class ContactsModule { }
