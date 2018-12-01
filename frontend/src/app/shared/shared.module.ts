import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { SharedRoutingModule } from "./shared-routing.module";
import { ContactsService } from "./service/contacts.service";

@NgModule({
  imports: [CommonModule, SharedRoutingModule],
  declarations: [FooterComponent],
  providers: [ContactsService],
  exports: [FooterComponent]
})
export class SharedModule {}
