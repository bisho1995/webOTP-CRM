import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Contact } from "../interface/contact";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OtpService {
  contacts;
  constructor(private http: HttpClient) {
    this.contacts = new BehaviorSubject<Contact[]>([]);
    this.getOTPcontactData();
  }
  getOTP() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.routes.generateOTP).subscribe(otp => {
        resolve(otp);
      });
    });
  }

  getOTPcontactData() {
    this.http.get(environment.routes.receiveOTPs).subscribe(contacts => {
      this.contacts.next(contacts["result"]);
    });
  }
}
