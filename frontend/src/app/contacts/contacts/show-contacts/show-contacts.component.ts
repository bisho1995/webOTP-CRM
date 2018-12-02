import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Contact } from "../../../shared/interface/contact";
import { ContactsService } from "../../../shared/service/contacts.service";

@Component({
  selector: "app-show-contacts",
  templateUrl: "./show-contacts.component.html",
  styleUrls: ["./show-contacts.component.scss"]
})
export class ShowContactsComponent implements OnInit {
  contacts: Contact[];
  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactService.contacts.subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  reset() {
    this.contactService.reset();
  }

  showInfo(index) {
    console.log(index);
    this.router.navigate(["contacts", "info"], { queryParams: { id: index } });
  }
}
