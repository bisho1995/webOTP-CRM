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
  file;
  contacts: Contact[];
  constructor(private title: Title, private contactService: ContactsService) {}

  ngOnInit() {
    this.title.setTitle("Contacts");
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  fileUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = evt => {
      const contactsRaw = evt.target["result"];
      try {
        const contacts = JSON.parse(contactsRaw)["contacts"];
        this.contactService.updateContacts(contacts);
      } catch (e) {
        console.log(e);
      }
    };
    const { name, type, size } = file;
    this.contactService.updateFileMetadata({ name, type, size });
    reader.readAsText(file);
  }
}
