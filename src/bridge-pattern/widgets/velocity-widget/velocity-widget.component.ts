import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css'],
  providers:[
    {
      provide:WIDGET,
      useExisting:VelocityWidgetComponent
    }
  ]
})
export class VelocityWidgetComponent implements OnInit, Widget {
  isRefreshing = false;

  constructor() {}

  ngOnInit() {}

  load() {
    console.log('Loading data from JIRA API ...');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
