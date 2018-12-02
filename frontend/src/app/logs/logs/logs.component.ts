import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { OtpService } from "../../shared/service/otp.service";
import { ContactsService } from "../../shared/service/contacts.service";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"]
})
export class LogsComponent implements OnInit {
  contacts;
  constructor(
    private title: Title,
    private otpService: OtpService,
    private contactService: ContactsService
  ) {}

  ngOnInit() {
    this.title.setTitle("Sent Messages");
    this.otpService.contacts.subscribe(data => {
      this.contacts = data;
    });
    this.otpService.getOTPcontactData();
  }
}
