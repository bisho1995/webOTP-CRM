import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

import { ContactsService } from "../../shared/service/contacts.service";
import { OtpService } from "../../shared/service/otp.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  private id: any;
  public contact: any;
  public otp;
  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactsService,
    private otpService: OtpService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.contactService.getContacts().subscribe(contacts => {
      this.contact = contacts[this.id];
      console.log(this.contact);
    });
    this.otpService.getOTP().then(otp => (this.otp = otp["otp"]));
    this.title.setTitle(`Send Message - ${this.computeName()}`);
  }

  public computeName() {
    return `${this.contact.first_name} ${this.contact.middle_name} ${
      this.contact.last_name
    }`;
  }
  async sendMessage() {
    await this.contactService.saveOtpContact(
      this.otp,
      this.contact.first_name,
      this.contact.middle_name,
      this.contact.last_name,
      this.contact.profile,
      this.contact.birthday,
      this.contact.phone,
      this.contact.email,
      this.contact.company
    );
  }
}
