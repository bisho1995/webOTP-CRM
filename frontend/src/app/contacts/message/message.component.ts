import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Send Message - {{Name}}");
  }
}
