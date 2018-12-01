import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";
import { SharedRoutingModule } from "./shared-routing.module";
import { ContactsService } from "./service/contacts.service";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FooterComponent, HeaderComponent],
  providers: [ContactsService],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}
