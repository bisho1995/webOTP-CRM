import { Injectable } from "@angular/core";
import { Contact } from "../interface/contact";
import { BehaviorSubject } from "rxjs";
import { File } from "../interface/file";
@Injectable({
  providedIn: "root"
})
export class ContactsService {
  contacts;
  file;
  constructor() {
    this.contacts = new BehaviorSubject<Contact[]>([]);
    this.file = new BehaviorSubject<File>(null);
  }
  updateContacts(newContacts) {
    this.contacts.next(newContacts);
  }
  getContacts() {
    return this.contacts;
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
}
