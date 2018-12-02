import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() contact;
  public id;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.contact);
    this.id = this.activatedRoute.snapshot.queryParams.id;
  }
}
