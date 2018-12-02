import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OtpService {
  constructor(private http: HttpClient) {}
  getOTP() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.routes.generateOTP).subscribe(otp => {
        resolve(otp);
      });
    });
  }
}
