import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../../../shared/service/contacts.service";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"]
})
export class UploadFileComponent implements OnInit {
  constructor(private contactService: ContactsService) {}

  ngOnInit() {}

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
