import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  urlStr;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.urlStr = "";
    const urls = this.activatedRoute.snapshot.pathFromRoot;
    urls.forEach(url => {
      if (url.url && url.url.length > 0)
        this.urlStr = this.urlStr += "/" + url.url[0].path;
    });
  }
}
