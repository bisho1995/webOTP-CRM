import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-view-message",
  templateUrl: "./view-message.component.html",
  styleUrls: ["./view-message.component.scss"]
})
export class ViewMessageComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Details - {{Name}}");
  }
}
