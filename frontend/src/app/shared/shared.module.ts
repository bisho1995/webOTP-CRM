import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";
import { ContactsService } from "./service/contacts.service";
import { HeaderComponent } from "./components/header/header.component";
import { AsideComponent } from "./components/aside/aside.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FooterComponent, HeaderComponent, AsideComponent],
  providers: [ContactsService],
  exports: [FooterComponent, HeaderComponent, AsideComponent]
})
export class SharedModule {}
