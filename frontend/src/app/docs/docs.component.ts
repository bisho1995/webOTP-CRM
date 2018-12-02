import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.scss"]
})
export class DocsComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Documentation");
  }
}
