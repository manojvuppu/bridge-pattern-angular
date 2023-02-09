import { Component, ContentChild, OnInit } from '@angular/core';
import { VelocityWidgetComponent } from '../widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from '../widgets/weather-widget/weather-widget.component';
import { Widget } from '../widgets/widget.interface';
import { WIDGET } from '../widgets/widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css'],
})
export class WidgetWrapperComponent implements OnInit {
  // @ContentChild(VelocityWidgetComponent)
  // velocityWidget!: VelocityWidgetComponent;
  // @ContentChild(WeatherWidgetComponent)
  // weatherWidget!: WeatherWidgetComponent;

  @ContentChild(WIDGET, { static: true })
  widget!: Widget;

  constructor() {}

  ngOnInit() {
    if (this.widget) {
      this.widget.load();
    }
    // if (this.weatherWidget) {
    //   this.weatherWidget.load();
    // }
    // if (this.velocityWidget) {
    //   this.velocityWidget.load();
    // }
  }

  refresh() {
    // debugger;
    // if (this.velocityWidget) {
    //   this.velocityWidget.refresh();
    // }
    // if (this.weatherWidget) {
    //   this.weatherWidget.refresh();
    // }
    if (this.widget) {
      this.widget.refresh();
    }
  }

  ngAfterContentInit() {
    // contentChild is set
  }
}
