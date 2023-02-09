import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule, 
    MatProgressBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent
  ],
  exports: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
  ],
})
export class BridgePatternModule {}
