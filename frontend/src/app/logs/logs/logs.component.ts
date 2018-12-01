import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"]
})
export class LogsComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Sent Messages");
  }
}
