import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ContactsService } from "./service/contacts.service";
import { RouteGuardService } from "./guard/route-guard.service";
import { OtpService } from "./service/otp.service";
import { HeaderComponent } from "./components/header/header.component";
import { AsideComponent } from "./components/aside/aside.component";

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [FooterComponent, HeaderComponent, AsideComponent],
  providers: [ContactsService, RouteGuardService, OtpService],
  exports: [FooterComponent, HeaderComponent, AsideComponent]
})
export class SharedModule {}
