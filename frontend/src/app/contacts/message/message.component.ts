import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

import { ContactsService } from "../../shared/service/contacts.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  private id: any;
  public contact: any;
  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.contactService.getContacts().subscribe(contacts => {
      this.contact = contacts[this.id];
      console.log(this.contact);
    });
    this.title.setTitle("Send Message - {{Name}}");
  }

  public computeName() {
    return `${this.contact.first_name} ${this.contact.middle_name} ${
      this.contact.last_name
    }`;
  }
}
