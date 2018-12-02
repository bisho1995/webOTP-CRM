import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { ContactsService } from "../service/contacts.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RouteGuardService implements CanActivate {
  private contacts;
  constructor(private contactService: ContactsService, private router: Router) {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  canActivate(route) {
    const id = route.queryParams.id;
    if (this.contacts.length > 0 && id >= 0 && id < this.contacts.length) {
      return true;
    } else {
      alert("Sorry the contact you are looking for does not exist");
      this.router.navigate(["/contacts"]);
      return false;
    }
  }
}
