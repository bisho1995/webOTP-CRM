import { Injectable } from "@angular/core";
import { Contact } from "../interface/contact";
import { BehaviorSubject } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { File } from "../interface/file";
@Injectable({
  providedIn: "root"
})
export class ContactsService {
  contacts;
  file;
  constructor(private http: HttpClient) {
    this.contacts = new BehaviorSubject<Contact[]>([]);
    this.file = new BehaviorSubject<File>(null);
  }
  updateContacts(newContacts) {
    this.contacts.next(newContacts);
  }
  updateFileMetadata(metadata) {
    this.file.next(metadata);
  }
  getFileMetadata() {
    return this.file;
  }

  reset() {
    this.contacts.next([]);
    this.file.next(null);
  }
  saveOtpContact(
    otp,
    first_name,
    middle_name,
    last_name,
    profile,
    birthday,
    phone,
    email,
    company,
    msg
  ) {
    return new Promise((resolve, reject) => {
      const body = JSON.stringify({
        otp,
        first_name,
        middle_name,
        last_name,
        profile,
        birthday,
        phone,
        email,
        company,
        msg
      });
      const options = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
      this.http
        .post(environment.routes.saveOTP, body, options)
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
