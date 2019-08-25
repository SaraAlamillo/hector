import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chart: any = null;

  constructor() { }

  ngOnInit() {

    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
        labels: ["uno", "dos", "tres"],
        datasets: [
          {
            label: 'Data',
            fill: false,
            data: [1,3,5],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
          fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
