import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Contact } from "../../shared/interface/contact";
import { ContactsService } from "../../shared/service/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  constructor(private title: Title, private contactService: ContactsService) {}

  ngOnInit() {
    this.title.setTitle("Contacts");
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
