import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Contact } from "../../shared/interface/contact";
import { ContactsService } from "../../shared/service/contacts.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  contactId;
  public contact: Contact;
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit() {
    this.title.setTitle("Contact Information");
    this.contactId = this.route.snapshot.queryParams.id;
    this.contactService.contacts.subscribe(contacts => {
      this.contact = contacts[this.contactId];
    });
  }
}
