import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "OTPs verified"
    },
    credits: {
      enabled: true
    },
    series: [
      {
        name: "Users in thousands",
        data: [1, 2, 3]
      }
    ]
  });
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(`Statistics`);
    this.chart.addPoint(Math.floor(Math.random() * 10));
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
