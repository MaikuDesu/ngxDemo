import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from './data';
import { Browser } from 'protractor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
NgxChartsModule ],
declarations: [AppComponent],
bootstrap: [AppComponent]

})
export class AppComponent {
  title = 'Chart app';

  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  //key
  showXAxis = true;
  showYAxis = true;
  graident = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'City';
  showYAxisLabel = true;
  yAxisLabel = 'Data';

  colorScheme = {
    domain: [' #d6eaf8 ', ' #abebc6 ', '#d7bde2', ' #d98880 ']
  };

  //line & area
  autoscale = true;

  constructor() {
    Object.assign(this, {single})
  }

  onSelect(event){
    console.log(event);
  }
}
