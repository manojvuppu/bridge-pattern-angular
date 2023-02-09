import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BridgePatternModule } from './bridge-pattern/bridge-pattern.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    BridgePatternModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  template: `
  <main class="content" style="background-color: #fff;
  padding: 2rem;
  height: calc(100vh - 64px);
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;">
  
  <app-widget-wrapper>
    <app-velocity-widget></app-velocity-widget>
  </app-widget-wrapper>

  
  <app-widget-wrapper>
    <app-weather-widget></app-weather-widget>
  </app-widget-wrapper>
  
  </main>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
