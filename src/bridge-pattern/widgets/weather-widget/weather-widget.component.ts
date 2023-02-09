import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers:[{
    provide:WIDGET,
    useExisting:WeatherWidgetComponent
  }]
})
export class WeatherWidgetComponent implements OnInit, Widget {
  isLoading = false;

  constructor() {}

  ngOnInit() {}

  load() {
    console.log('Loading data from WEATHER API ...');
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
}
